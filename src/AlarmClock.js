import ClockState from './ClockState';
import BellState from './BellState';

export default class AlarmClock {
  constructor() {
    this.clockMin = 12 * 60;
    this.alarmMin = 6 * 60;
    this.alarmMode = false;
    this.setState(ClockState);
  }

  setState(Klass) {
    this.state = new Klass(this);
  }

  clickMode() {
    this.state.nextState();
  }

  longClickMode() {
    this.alarmMode = !this.alarmMode;
  }

  clickH() {
    this.state.clickH();
  }

  clickM() {
    this.state.clickM();
  }

  tick() {
    this.clockMin = (this.clockMin + 1) % (60 * 24);
    if (this.isAlarmOn() && this.clockMin === this.alarmMin) {
      this.setState(BellState);
    }
  }

  isAlarmOn() {
    return this.alarmMode;
  }

  isAlarmTime() {
    return this.clockMin === this.alarmMin;
  }

  minutes() {
    return this.clockMin % 60;
  }

  hours() {
    return (this.clockMin - (this.clockMin % 60)) / 60;
  }

  alarmMinutes() {
    return this.alarmMin % 60;
  }

  alarmHours() {
    return (this.alarmMin - (this.alarmMin % 60)) / 60;
  }

  getCurrentMode() {
    return this.state.mode;
  }
}
