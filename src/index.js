import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'




const notebook = new Notebook();
const display = new Display(notebook);
notebook.addProject('projekt1');
notebook.addProject('projekt2');
notebook.addProject('projekt3');
notebook.addProject('projekt4');
notebook.addProject('projekt5');
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
console.log(notebook.getNotes());
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 1);
display.refreshLeft();
display.refreshRight();