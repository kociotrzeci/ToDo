import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'




const notebook = new Notebook();
const display = new Display(notebook);
notebook.addProject('projekt1');
notebook.addProject('projekt2');
notebook.addNote('title0', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title1', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title2', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title3', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title4', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title5', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title6', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title2', 'desc', '2024-10-20', 1, 0);
notebook.addNote('title3', 'desc', '2024-10-20', 1, 1);
notebook.addNote('title4', 'desc', '2024-10-20', 1, 1);
notebook.addNote('title5', 'desc', '2024-10-20', 1, 1);
notebook.addNote('title6', 'desc', '2024-10-20', 1, 1);
display.refreshLeft();
display.refreshRight();