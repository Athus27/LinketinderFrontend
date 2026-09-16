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
		title: "Task 1",
		description: "This is a test task.",
		dueDate: "2024-06-30",
		status: "ToDo"
	},
	{
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
	render();
});
