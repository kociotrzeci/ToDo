import "./styles.scss";
import { Notebook } from './logic.js'

const notebook = new Notebook;
notebook.addProject('projekt1')
notebook.addNote('2000-12-12', 0, 'notatka');
notebook.addNote('2000-12-12', 0, 'notatka');
notebook.addNote('2000-12-12', 0, 'notatka');
notebook.printNotes();