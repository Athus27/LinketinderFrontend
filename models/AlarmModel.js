export class Alarm {
	static nextId = 1;

	id;
	minutesBefore;
	alarmAt;
	constructor(params) {
		if (params.id !== undefined) {
			this.id = params.id;
			Alarm.nextId = Math.max(Alarm.nextId, params.id + 1);
		} else {
			this.id = Alarm.nextId++;
		}

		this.minutesBefore = params.minutesBefore;
		this.alarmAt = params.alarmAt;
	}
}
