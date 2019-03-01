import State from './State'

export default class ClockState extends State {

    constructor() {
        super()
        this.mode = 'clock';

    }

    tick() {
        // if (this.clock.isAlarmTime()) {
            // this.clock.setState(BellState);
        // }
    }
}