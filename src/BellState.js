import State from './State';
import ClockState from './ClockState';

export default class BellState extends State {
  constructor(context) {
    super('bell');
    this.context = context;
    this.nextStateClass = ClockState;
  }

  clickH() {
    this.context.setState(ClockState);
  }

  clickM() {
    this.context.setState(ClockState);
  }
}
