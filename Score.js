//Tracks mole score in top left

class Score {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.score = 0;
  }
  scoreUp() {
    this.score += 1;
  }
  reset() {
    this.score = 0;
  }
  draw() {
    fill('pink');
    textSize(15);
    text("Total: " + this.score, 30, 50);
  }
}