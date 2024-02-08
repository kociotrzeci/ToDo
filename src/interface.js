export class Display {
    constructor(notebook) {
        this.left = document.getElementById('left-panel');
        this.right = document.getElementById('right-panel');
        this.notebook = notebook;
        this.selectedProject = 0;
    }
    refreshLeft() {
        while (this.left.lastChild) {
            this.left.removeChild(this.left.lastChild);
        }
        this.notebook.projects.forEach(element => {
            const container = document.createElement('div')
            container.className = 'project-card';
            if (element.id === this.selectedProject) container.className = 'project-card project-active';
            else container.className = 'project-card';
            container.addEventListener('click', () => {
                this.selectedProject = element.id;
                this.refreshRight();
                this.refreshLeft();
            })
            const name = document.createElement('p');
            const btn = document.createElement('button');
            btn.addEventListener('click', () => {
                this.notebook.removeProject(element.id)
                console.log(element.id);
                this.refreshLeft();
            }
            )
            btn.textContent = 'X';
            name.textContent = element.name;
            container.appendChild(name);
            container.appendChild(btn);
            this.left.appendChild(container);
        });

    }
    refreshRight() {
        while (this.right.lastChild) {
            this.right.removeChild(this.right.lastChild);
        }
        this.notebook.getNotesOfProject(this.selectedProject).forEach(element => {
            console.log(element);
            const container = document.createElement('div')
            container.className = 'note-card ' + element.priority;
            const title = document.createElement('h4');
            const priority = document.createElement('p')
            priority.className = 'priority' + element.priority;
            const dueDate = document.createElement('p');
            dueDate.className = 'date';
            title.className = 'note-title';
            const btn = document.createElement('button');
            btn.addEventListener('click', () => {
                this.notebook.removeNote(element.id)
                console.log(element.id);
                this.refreshRight();
            });
            btn.textContent = 'done';
            title.textContent = element.title;
            container.appendChild(title);
            container.appendChild(btn);
            this.right.appendChild(container);
        })


    }
    text() {
        this.notebook.test();
    }

}


