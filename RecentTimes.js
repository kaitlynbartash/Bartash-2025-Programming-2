// Manages highscores shown at the endscreen

class RecentTimes {
  constructor() {
    this.topTimes = [];
  }
  updateNewTimes(newTimeMillis) {
    this.topTimes.push(newTimeMillis);
    this.topTimes.sort(function(a, b) {
      return a - b;
    });
  }
  convertTime(ms) { //Changes time from milliseconds to MM/SS/MS format
    const minutes = floor(ms / 60000);
    const seconds = floor((ms % 60000) / 1000)
    const milliseconds = floor((ms % 1000) / 10);
    return nf(minutes, 2) + ":" + nf(seconds, 2) + ":" + nf(milliseconds, 2);
  }
  draw() {
    for(let i = 0; i < this.topTimes.length; i++) {
      let timeConverted = this.convertTime(this.topTimes[i]);
      textSize(15);
      fill('SaddleBrown');
      text('#' + [i + 1] + ': ' + timeConverted.toString(), width / 2 - 45, (height / 3 + 35) + 15 * i);
    }
  }
}