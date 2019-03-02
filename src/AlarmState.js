import State from './State';
// eslint-disable-next-line import/no-cycle
import ClockState from './ClockState';

export default class AlarmState extends State {
  constructor(context) {
    super('alarm');
    this.context = context;
    this.nextStateClass = ClockState;
  }

  clickH() {
    this.context.alarmMin = this.calculatePlusHour(this.context.alarmMin);
  }

  clickM() {
    this.context.alarmMin = this.calculatePlusMin(this.context.alarmMin);
  }
}
