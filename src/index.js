import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'


const notebook = new Notebook();
const display = new Display(notebook);
display.refreshLeft();
display.refreshRight();
console.log(notebook.getNotesOfProject(0));
notebook.saveStorage();
