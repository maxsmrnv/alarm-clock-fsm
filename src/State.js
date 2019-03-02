export default class State {
  constructor(mode) {
    this.mode = mode;
  }

  nextState() {
    this.context.setState(this.nextStateClass);
  }

  calculatePlusHour(h) {
    return h + 60 > (24 * 60) ? (h + 60) % (24 * 60) : h + 60;
  }

  calculatePlusMin(min) {
    return min % 60 === 59 ? min - 59 : min + 1;
  }
}
