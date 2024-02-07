export class Notebook {
    constructor() {
        this.notes = [];
        this.projects = [];
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
        const _notes = []
        this.projects[projectID].notes.forEach(element => {
            _notes.push(this.notes[element]);
        });
        return _notes;
    }
    markNoteAsDone(id) {
        this.notes[id].isComplete = true;
    }
    test() {
        console.log('dupa');
    }
    removeProject(projectID) {
        this.projects.splice(projectID, 1);
    }
}



class Note {
    static id = 0;
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = Note.id;
        Note.id++;
        this.isComplete = false;
    }
    print() {
        console.log(this);
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

