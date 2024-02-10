export class Display {
    constructor(notebook) {
        this.left = document.getElementById('left-panel');
        this.right = document.getElementById('right-panel');
        this.body = document.querySelector('body');
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
    form() {
        this.createForm(projectForm);
    }
    createForm(input) {
        const formContainer = document.createElement('div');
        const backdrop = document.createElement('div');
        formContainer.classList.add('popup-form');
        backdrop.classList.add('backdrop');
        for (const key in input) {
            const element = input[key];
            const div = document.createElement('div');
            div.classList.add('form-group');
            const label = document.createElement('label');
            label.textContent = element.label;
            div.appendChild(label);

            if (key === 'optionsRadio') {
                const select = document.createElement('select');
                select.id = key;
                element.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.textContent = option.label;
                    select.appendChild(optionElement);
                });
                div.appendChild(select); // Append the select element to the form group div
            }
            else {
                const inputElement = document.createElement('input'); // Rename the variable to avoid conflict
                inputElement.type = element.type;
                inputElement.id = key;
                div.appendChild(inputElement); // Append the input element to the form group div
            }
            formContainer.appendChild(div); // Append the form group div to the form container
        }
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        formContainer.appendChild(submitButton);
        document.body.appendChild(backdrop);
        document.body.appendChild(formContainer);
    }

}

const projectForm = {
    name: {
        type: 'text',
        label: 'Project name:'
    }
};

const noteForm = {
    title: {
        type: 'text',
        label: 'Note name:'
    },
    description: {
        type: 'text',
        label: 'Description:'
    },
    optionsRadio: {
        options: [
            { value: 1, label: 'High' },
            { value: 2, label: 'Medium' },
            { value: 3, label: 'Low' }
        ],
        label: 'Priority:'

    }
}
