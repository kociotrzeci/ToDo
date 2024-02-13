import _ from "date-fns"

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

        return _notes.sort((a, b) => b.priority - a.priority);
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
}



class Note {
    static id = 0;
    static priorities = ['Low', 'Medium', 'High'];
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLabel = Note.priorities[priority];
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

