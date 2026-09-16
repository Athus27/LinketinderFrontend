export class Task {
	static nextId = 1;

	id;
	title;
	description;
	status;

	constructor(parameters) {
		if (parameters.id !== undefined) {
			this.id = parameters.id;
			Task.nextId = Math.max(Task.nextId, parameters.id + 1);
		} else {
			this.id = Task.nextId++;
		}

		this.title = parameters.title || "";
		this.description = parameters.description || "";
		this.dueDate = parameters.dueDate || "";
		this.status = parameters.status || "ToDo";
	}
}
