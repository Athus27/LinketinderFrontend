export function saveBoard(board) {
	localStorage.setItem("board", JSON.stringify(board.tasks));
	console.log("salvando tasks...");
}

export function loadTasks() {
	const tasks = localStorage.getItem("board");

	return tasks ? JSON.parse(tasks) : null;
}
