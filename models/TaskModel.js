export class Task {
	static nextId = 1;

	id;
	title;
	description;
	status;
	alarms;


	constructor(parameters) {
		if (parameters.id !== undefined) {
			this.id = parameters.id;
			Task.nextId = Math.max(Task.nextId, parameters.id + 1);
		} else {
			this.id = Task.nextId++;
		}

		this.alarms = parameters.alarms || [];

		this.title = parameters.title || "";
		this.description = parameters.description || "";
		this.dueDate = parameters.dueDate || "";
		this.status = parameters.status || "ToDo";
	}

	addAlarm(alarm){
		this.alarms.push(alarm)
	}

	removeAlarm(alarmId){
		this.alarms = this.alarms.filter((alarm)=> alarm.id !== alarmId);
	}

}
