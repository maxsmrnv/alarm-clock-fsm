import State from './State';
import AlarmState from './AlarmState';

export default class ClockState extends State {
  constructor(context) {
    super('clock');
    this.context = context;
    this.nextStateClass = AlarmState;
  }

  clickH() {
    this.context.clockMin = this.calculatePlusHour(this.context.clockMin);
  }

  clickM() {
    this.context.clockMin = this.calculatePlusMin(this.context.clockMin);
  }
}
