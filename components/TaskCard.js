export function TaskCard(task) {
	return `
        <div class="task-card">
            <div class="task-content">
                <div>
                    <h2>${task.title}</h2>
                    <p>${task.description}</p>
                    <p>Due Date: ${task.dueDate}</p>
                </div>
                <div style = "min-height:100px;width:25%;display: flex;flex-direction:row;justify-content: left;">
                <button class="showView" onClick=showAndHiddenTaskOptions(this)><img class = "icon" src = "../assets/icons/addTask.svg"></button>
                <button class="ocultView"onClick=showAndHiddenTaskOptions(this)><img class="icon icon-minimize" src="../assets/icons/minimize.svg"></button>
                
                    <button class="opt-btn"><img class = "icon" src = "../assets/icons/up.svg"></button>
                    <button class="opt-btn"><img class = "icon" src = "../assets/icons/down.svg"></button>
                    <button class="opt-btn"><img class = "icon" src = "../assets/icons/delete.svg"></button>
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
