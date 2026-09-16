export class BoardModel {
	constructor() {
		this.tasks = [];
	}

	addTask(task) {
		this.tasks.push(task);
		this.tasks = this.orderTasksBySection(this.tasks);
	}

	removeTask(taskId) {
		this.tasks = this.tasks.filter((task) => task.id !== taskId);
	}

	getTasks() {
		console.log("getTasks chamada");
		return this.tasks;
	}

	updateTaskStatus(status) {
		switch (status) {
			case "ToDo":
				return "Doing";
			case "Doing":
				return "Done";
			case "Done":
				return null;
			default:
				return status;
		}
	}

	/**
	 * Dado um array de tarefas, ordena as tarefas com base na ordem das seções (ToDo, Doing, Done).
	 * A arrow function usada para comparar as seções das tarefas e determinar a ordem correta.
	 * Se >0, taskB vem antes, se <0, taskA vem antes, se 0, a ordem permanece inalterada.
	 * @param {Array<import('./TaskModel').TaskModel>} tasks
	 * @returns {Array<import('./TaskModel').TaskModel>} Retorna um novo array de tarefas ordenadas.
	 */
	orderTasksBySection(tasks) {
		console.log("OrderTasks chamada");
		return tasks.sort((taskA, taskB) => {
			return this.getSectionOrder(taskA.status) - this.getSectionOrder(taskB.status);
		});
	}

	getSectionOrder(section) {
		switch (section) {
			case "ToDo":
				return 1;
			case "Doing":
				return 2;
			case "Done":
				return 3;
			default:
				return 4;
		}
	}

	moveTask(taskId, direction) {
		const task = this.tasks.find((task) => task.id === taskId);
		if (!task) return false;

		const statuses = ["ToDo", "Doing", "Done"];
		const currentIndex = statuses.indexOf(task.status);
		const movement = direction === "down" ? 1 : -1;
		const nextIndex = currentIndex + movement;

		if (nextIndex < 0 || nextIndex >= statuses.length) {
			return false;
		}

		task.status = statuses[nextIndex];
		this.orderTasksBySection(this.tasks);

		return true;
	}
}
