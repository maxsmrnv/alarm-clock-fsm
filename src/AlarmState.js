import State from './State'

export default class AlarmState extends State {
    constructor(context) {
        super()
        this.mode = 'alarm';
        this.context = context

    }
    clickH() {
        if (this.context.alarmHrs == 23) {
            this.context.alarmHrs = 0
        } else {
            this.context.alarmHrs += 1
        }
    }

    clickM() {
        if (this.context.alarmMin == 59) {
            this.context.alarmMin = 0
        } else {
            this.context.alarmMin += 1
        }
    }
}