import State from './State'

export default class ClockState extends State {

    constructor(context) {
        super()
        this.mode = 'clock';
        this.context = context
    }


    clickH() {
        if (this.context.clockHrs == 23) {
            this.context.clockHrs = 0
        } else {
            this.context.clockHrs += 1
        }
    }

    clickM() {
        if (this.context.clockMin == 59) {
            this.context.clockMin = 0
        } else {
            this.context.clockMin += 1
        }
    }


}