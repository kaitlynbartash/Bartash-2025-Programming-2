class StateManager {
  constructor() {
    // Constants to represent possible game states
    this.TITLE = 0;
    this.RUN = 1;
    this.END = 2;

    this.state = this.TITLE;
  }
  isTitle() {
    return this.state === this.TITLE;
  }
  isRun() {
    return this.state === this.RUN;
  }
  isEnd() {
    return this.state === this.END;
  }
  setTitle() {
    this.state = this.TITLE;
  }
  setRun() {
    this.state = this.RUN;
  }
  setEnd() {
    this.state = this.END;
  }
}