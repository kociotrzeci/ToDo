import "./styles.scss";
import { Notebook } from './logic.js'

const notebook = new Notebook;
notebook.addProject('projekt1')
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.addNote('title', 'desc', '2000-20-20', 1, 0);
notebook.printNotes();