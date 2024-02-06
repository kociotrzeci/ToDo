export class Display {
    constructor(notebook) {
        this.left = document.getElementById('left-panel');
        this.right = document.getElementById('right-panel');
        this.notebook = notebook; // Use the original notebook, not a shallow copy
    }
    refreshLeft() {
        const item = document.createElement('div');
        item.textContent = 'test';
        this.left.appendChild(item);
    }
    text() {
        this.notebook.test();
    }
}


