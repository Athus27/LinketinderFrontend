export function TaskCard(task) {
	return `
        <div class="task-card">
            <div class="task-content">
               <div class="task-info">
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                    <p class="task-date">
                        <img
                            class="calendar-icon"
                            src="../assets/icons/calendar.svg"
                            alt=""
                        >
                        <span>Due Date: ${formatDate(task.dueDate)}</span>
                    </p>
                </div>
                <div class="task-controls">
                    <button class="showView" onClick=showAndHiddenTaskOptions(this)><img class = "icon" src = "../assets/icons/addTask.svg"></button>
                    <button class="ocultView"onClick=showAndHiddenTaskOptions(this)><img class="icon icon-minimize" src="../assets/icons/minimize.svg"></button>
                
                    <button class="opt-btn" onClick = "moveUpTask(${task.id})"><img class = "icon" src = "../assets/icons/up.svg"></button>
                    <button class="opt-btn" onClick = "moveDownTask(${task.id})"><img class = "icon" src = "../assets/icons/down.svg"></button>
                    <button class="opt-btn" onClick = "deleteTask(${task.id})"><img class = "icon" src = "../assets/icons/delete.svg"></button>
                </div>
            </div>
            <div class= "task-options">
                
                <div class = "task-alarm">
                    <h3   h3>Alarm</h3>
                    Area temporaria de alarmes
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateTime) {
    if (!dateTime) return "";

    const [date, time] = dateTime.split("T");
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year} às ${time}`;
}