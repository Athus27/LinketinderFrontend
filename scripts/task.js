import { Task } from "../models/TaskModel.js";
import { saveBoard } from "./storage.js";

export function addTaskShow() {
	console.log("addtask");
	//components/TaskForm.js
	const taskForm = document.querySelector(".add-task-form");

	const addTaskBtn = document.querySelector(".add-task-btn");
	addTaskBtn.textContent = addTaskBtn.textContent === "+" ? "-" : "+";

	switch (taskForm.style.display) {
		case "block":
			taskForm.style.display = "none";
			break;
		default:
			taskForm.style.display = "block";
			break;
	}
}

export function showAndHiddenTaskOptions(button) {
	const taskCard = button.closest(".task-card");
	taskCard.classList.toggle("options-open");
}

export function addTask(event, board) {
	event.preventDefault();

	const newTask = new Task({
		title: document.querySelector("#title").value,
		description: document.querySelector("#description").value,
		dueDate: document.querySelector("#dueDate").value,
		status: "ToDo"
	});

	board.addTask(newTask);
	saveBoard(board);
}

export function toggleAlarmForm(button) {
	const alarmSection = button.closest(".task-alarm");
	const form = alarmSection.querySelector(".alarm-form");

	form.hidden = !form.hidden;
}
