import { Board } from "./components/Board.js";
import { loadTasks, saveBoard } from "./scripts/storage.js";

import { Header } from "./components/ui/Header.js";

import { TaskCard } from "./components/TaskCard.js";
import {} from "./scripts/task.js";

import { addTask, addTaskShow, showAndHiddenTaskOptions } from "./scripts/task.js";
import { BoardModel } from "./models/BoardModel.js";
window.addTaskShow = addTaskShow;
window.showAndHiddenTaskOptions = showAndHiddenTaskOptions;
window.loadTask = loadTasks;
window.loadTask = saveBoard;

const board = new BoardModel();

const tasks = [
	{
		id:1,
		title: "Task 1",
		description: "This is a test task.",
		dueDate: "2024-06-30",
		status: "ToDo"
	},
	{
		id:2,
		title: "Task 2",
		description: "Outra task.",
		dueDate: "2024-07-01",
		status: "Doing"
	}
];

const savedTasks = loadTasks();
const initialTasks = savedTasks ?? tasks;

initialTasks.forEach((task) => board.addTask(task));

function render() {
	const app = document.querySelector("#app");

	app.innerHTML = `
		${Header()}
		${Board(board.getTasks())}
  `;
}

render();

const form = document.querySelector("#taskForm");
form.addEventListener("submit", (event) => {
	console.log("SUBMIT formulario create task   ");
	addTask(event, board);
});

window.deleteTask = (taskId) => {
    board.removeTask(taskId);
    saveBoard(board);
    render();
};
