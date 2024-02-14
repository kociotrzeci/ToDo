import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'



const notebook = new Notebook();
const display = new Display(notebook);
notebook.addProject('projekt1');
notebook.addProject('projekttestttt');
notebook.addNote('title0', 'desc', '2024-10-20', '0', 0);
notebook.addNote('title1', 'desc', '2024-10-21', '2', 0);
notebook.addNote('title2', 'desc', '2024-10-22', '2', 0);
notebook.addNote('title3', 'desc', '2024-10-22', '1', 0);
notebook.addNote('title4', 'desc', '2024-10-23', '0', 0);
notebook.addNote('title5', 'desc', '2024-10-21', '0', 0);
notebook.addNote('title6', 'desc', '2024-10-20', '1', 0);
notebook.addNote('title2', 'desc', '2024-10-23', '1', 0);
notebook.addNote('title3', 'desc', '2024-10-22', '2', 1);
notebook.addNote('title4', 'desc', '2024-10-20', '1', 1);
notebook.addNote('title5', 'desc', '2024-10-21', '0', 1);
notebook.addNote('title6', 'desc', '2024-10-20', '0', 1);
display.refreshLeft();
display.refreshRight();

