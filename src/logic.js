import "date-fns"

export class Notebook {
    constructor() {
        console.log(localStorage.getItem('notebook.notes'));
        this.notes = [];
        this.projects = [];
        if (localStorage.getItem('notebook.notes') != null) {
            let _notes = JSON.parse(localStorage.getItem('notebook.notes') || '[]');
            let _projects = JSON.parse(localStorage.getItem('notebook.projects') || '[]');
            _projects.forEach(element => {
                this.projects.push(new Project(element.name));
            });
            _notes.forEach(element => {
                this.notes.push(new Note(element.title, element.description, element.dueDate, element.priority, element.projectID));
            });
        }
        else {
            this.addDummyContent();
        }
    }
    addNote(title, description, dueDate, priority, projectID) {
        this.projects[projectID].addNote(Note.id);
        this.notes.push(new Note(title, description, dueDate, priority, projectID));

    }
    addProject(projectName) {
        this.projects.push(new Project(projectName));
    }
    getNotes() {
        return (this.notes);
    }
    getProjects() {
        return (this.projects);
    }
    getNotesOfProject(projectID) {
        if (this.projects[projectID] === undefined) { return }
        const _notes = []
        this.projects[projectID].notes.forEach(element => {
            _notes.push(this.notes[element]);
        });
        const _notesPriority = _notes.sort((a, b) => b.priority - a.priority);

        return _notesPriority.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    markNoteAsDone(id) {
        this.notes[id].isComplete = true;
    }
    removeProject(projectID) {
        const ID = this.projects.map((project) => project.id).indexOf(projectID);
        this.projects.splice(ID, 1);
    }
    removeNote(_noteID) {
        const noteID = this.notes.map((note => note.id)).indexOf(_noteID);
        const projectID = this.projects.map((project) => project.id).indexOf(this.notes[noteID].project);
        const noteInProjectID = this.projects[projectID].notes.findIndex(note => note.id === _noteID);
        this.notes.splice(noteID, 1);
        this.projects[projectID].notes.splice(noteInProjectID, 1);
    }
    saveStorage() {
        localStorage.setItem('notebook.notes', JSON.stringify(this.notes));
        localStorage.setItem('notebook.projects', JSON.stringify(this.projects));
        console.log("Saved!");
    }
    addDummyContent() {
        this.addProject('Project 1');
        this.addProject('Project 2');
        this.addNote('title0', 'desc', '2024-10-20', '0', 0);
        this.addNote('title1', 'desc', '2024-10-21', '2', 0);
        this.addNote('title2', 'desc', '2024-10-22', '2', 0);
        this.addNote('title3', 'desc', '2024-10-22', '1', 0);
        this.addNote('title4', 'desc', '2024-10-23', '0', 0);
        this.addNote('title5', 'desc', '2024-10-21', '0', 0);
        this.addNote('title6', 'desc', '2024-10-20', '1', 0);
        this.addNote('title2', 'desc', '2024-10-23', '1', 0);
        this.addNote('title3', 'desc', '2024-10-22', '2', 1);
        this.addNote('title4', 'desc', '2024-10-20', '1', 1);
        this.addNote('title5', 'desc', '2024-10-21', '0', 1);
        this.addNote('title6', 'desc', '2024-10-20', '0', 1);
        console.log('NOTES:');
        console.log(this.projects[0].notes);
        console.log(this.notes);
    }

}

class Note {
    static id = 0;
    static priorities = ['Low', 'Medium', 'High'];
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.dateDisplay = this.dueDate.toLocaleDateString("pl-PL");
        this.priorityLabel = Note.priorities[priority];
        this.priority = priority;
        this.project = project;
        this.id = Note.id;
        Note.id++;
        this.isComplete = false;
    }
}

class Project {
    static id = 0;

    constructor(projectName) {
        this.name = projectName;
        this.notes = [];

        this.id = Project.id;
        Project.id++;
    }
    addNote(noteID) {
        this.notes.push(noteID);
    }
}

