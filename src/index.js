import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'




const notebook = new Notebook();
const display = new Display(notebook);
notebook.addProject('projekt1');
notebook.addProject('projekt2');
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
console.log(notebook.getProjects());
console.log(notebook.getNotes());
console.log(notebook.getNotesOfProject(0));
notebook.markNoteAsDone(2);
console.log(notebook.getNotes());
display.text();
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
display.text();