import { TaskCard } from "./TaskCard.js";

export function Board(tasks) {
	return `
		<section class="board">
			<div class="board-header">
				<div class= "manage-tasks">
					<h1>My Board</h1>		
				</div>
				<div class="control-buttons">
					<button class="add-task-btn" onClick="addTaskShow()">+</button>
				</div>
			</div>
					<div class="add-task-form">
						<form id="taskForm">
							<label for="title">Title:</label>
							<input type="text" id="title" name="title" required />
							<label for="description">Description:</label>
							<textarea id="description" name="description" required></textarea>
							<label for="dueDate">Due Date:</label>
							<input type="date" id="dueDate" name="dueDate" required />
							<div style="display: flex; justify-content: center; margin-top: 10px;">
							</div>
							<button type="submit">Add Task</button>
						</form>	
					</div>
			</div>
			<div class="board-section todo">
				<h2>ToDo</h2>
				<ul class="task-list">
					${renderTasksByStatus(tasks, "ToDo")}
				</ul>
			</div>

			<div class="board-section doing">
				<h2>Doing</h2>
				<ul class="task-list">
					${renderTasksByStatus(tasks, "Doing")}
				</ul>
			</div>

			<div class="board-section done">
				<h2>Done</h2>
				<ul class="task-list">
					${renderTasksByStatus(tasks, "Done")}
				</ul>
			</div>
		</section>
	`;
}

function renderTasksByStatus(tasks, status) {
	return tasks
		.filter((task) => task.status === status)
		.map((task) => `<li>${TaskCard(task)}</li>`)
		.join("");
}
