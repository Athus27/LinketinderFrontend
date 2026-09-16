
export class Task {
    static nextId = 1;

    id;
    title;
    description;
    status;

    constructor(parameters) {
        this.id = parameters.id ?? Task.nextId++;
        this.title = parameters.title || "";
        this.description = parameters.description || "";
        this.status = "ToDo";
    }
}