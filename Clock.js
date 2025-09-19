//Clock class, manages the visual clock

class Clock {
  constructor() {
    this.lastMillis = 0;
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.running = false;
  }
  update() {
    if(this.running === true) {}
    let currentMillis = millis();
    let timeSince = currentMillis - this.lastMillis;
    this.milliseconds += timeSince;

    if(this.milliseconds >= 1000) {
      this.seconds += 1;
      this.milliseconds -= 1000;
    }
    if(this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    this.lastMillis = currentMillis;
  }
  totalTime() { //Tracks total milliseconds for easier sorting later
    return this.milliseconds + this.seconds * 1000 + this.minutes * 60000;
  }
  reset() {
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.lastMillis = millis();
  }
  draw() {
    let visibleMilliseconds = floor(this.milliseconds / 10);
    fill('pink');
    text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + ":" + nf(visibleMilliseconds, 2), (width / 2) - 75, 25);
  }
}