class ToDo {
    constructor() {
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }
    remove(indexOfTask) {
        if(indexOfTask < 0 || indexOfTask > this.tasks.length) {
            throw new Error("Invalid index");
        }
        this.tasks.splice(indexOfTask, 1);
    }
    update(indexOfTask, updatedTask) {
        if(indexOfTask < 0 || indexOfTask > this.tasks.length) {
            throw new Error("Invalid index");
        }
        this.tasks[indexOfTask] = updatedTask;
    }
    getAll() {
        return this.tasks;
    }
    get(indexOfTask) {
        if(indexOfTask < 0 || indexOfTask > this.tasks.length) {
            throw new Error("Invalid index");
        }
        return this.tasks[indexOfTask];
    }
    clear() {
        this.tasks = [];
    }
}