// script.js
import { Board } from "./components/Board.js";
import { Header } from "./components/ui/Header.js";
import { Task } from "./models/TaskModel.js";
import { BoardModel } from "./models/BoardModel.js";
import { loadTasks, saveBoard } from "./scripts/storage.js";
import { addTask, addTaskShow, showAndHiddenTaskOptions } from "./scripts/task.js";

const app = document.querySelector("#app");
const board = new BoardModel();

const savedTasks = loadTasks();
const initialTasks = savedTasks ?? [];

initialTasks.forEach((task) => {
	board.addTask(new Task(task));
});

function render() {
	app.innerHTML = `
        ${Header()}
        ${Board(board.getTasks())}
    `;
}

app.addEventListener("submit", (event) => {
	if (event.target.id !== "taskForm") return;

	addTask(event, board);
	render();
});

window.addTaskShow = addTaskShow;
window.showAndHiddenTaskOptions = showAndHiddenTaskOptions;

window.moveDownTask = (taskId) => {
	if (!board.moveTask(taskId, "down")) {
		alert("A tarefa já está em Done.");
		return;
	}

	saveBoard(board);
	render();
};

window.moveUpTask = (taskId) => {
	if (!board.moveTask(taskId, "up")) {
		alert("A tarefa já está em ToDo.");
		return;
	}

	saveBoard(board);
	render();
};

window.deleteTask = (taskId) => {
	board.removeTask(taskId);
	saveBoard(board);
	render();
};

// Apenas para depuração no console.
window.board = board;

render();
