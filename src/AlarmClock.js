import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class AlarmClock {

    constructor() {
        this.clockHrs = 12;
        this.clockMin = 0;
        this.alarmHrs = 6;
        this.alarmMin = 0;
        this.alarmMode = false
        this.setState(ClockState);
    }

    setState(Klass) {
        this.state = new Klass(this);
    }

    clickMode() {

    }

    longClickMode() {

    }

    clickH() {
        this.state.clickH();
    }

    clickM() {

    }

    tick() {
        this.clockMin+=1

    }

    isAlarmOn() {
        return this.alarmMode;
    }

    isAlarmTime() {

    }

    minutes() {
        return this.clockMin;
    }

    hours() {
        return this.clockHrs;
    }

    alarmMinutes() {
        return this.alarmMin;

    }

    alarmHours() {
        return this.alarmHrs;
    }

    getCurrentMode() {
        return this.state.mode;
    }

}