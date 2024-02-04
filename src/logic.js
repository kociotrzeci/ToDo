export class Notebook {
    constructor() {
        this.notes = [];
        this.projects = [];
    }
    addNote(title, description, dueDate, priority, projectID) {
        this.projects[projectID].addNote(Note.id);
        this.notes.push(new Note(title, description, dueDate, priority));

    }
    addProject(projectName) {
        this.projects.push(new Project(projectName));
    }
    printNotes() {
        this.notes.forEach(element => {
            console.log(element);
        });
    }
}



class Note {
    static id = 0;
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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
        this.projectName = projectName;
        this.notes = [];

        this.id = Project.id;
        Project.id++;
    }
    addNote(noteID) {
        this.notes.push(noteID);
    }
}

