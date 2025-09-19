/*******************************************
 * Mole Mayhem
 * Helina Tadesse <tadesseh@emmanuel.edu>
 * Katie Bartash <bartashk@emmanuel.edu>
 * 1st May 2025
 ******************************************/
const clocks = [];
const moles = [];
let moleScore = 0;
let bestTimes;
let audio;
let audioStarted = false;

let titleSlide = { //Creates our title slide
  draw: function() {
    background('SaddleBrown');
    textSize(60),
      stroke('Tan');
    textFont('Palatino');
    fill('OLive');
    text("Mole Mayhem", 7, 160);
    stroke('Sienna');
    textFont('Courier');
    textSize(25),
      text("Click Enter to Start", 50, 275);
    stroke('Grey');
    textSize(12);
    text("How fast can you whack Martin and his friends?", 35, 225);
  }
};

const state = new StateManager();

let Bgimg;

function preload() {
  Bgimg = loadImage('background.png');
  soundFormats("mp3"); //Will format the audio
  audio = loadSound("best-game-console.mp3");
}

function setup() {
  createCanvas(400, 400);
  background(220);
  clocks.push(new Clock());
  moles.push(new Mole());
  moleScore = new Score();
  bestTimes = new RecentTimes();

  noCursor();
}

function draw() {
  background(220);

  if(state.isTitle()) {
    titleSlide.draw();
  }
  if(state.isRun()) {
    imageMode(CORNER);
    image(Bgimg, 0, 0, width, height, 10, 0, Bgimg.width, Bgimg.height, COVER);

    for(const clock of clocks) {
      clock.draw();
      clock.update();
    }
    for(const mole of moles) {
      mole.update();
      mole.draw();
    }
    moleScore.draw();
    textSize(32);
    text('🔨', mouseX, mouseY); //Creates visual effect that the mouse is a hammer.

    if(moleScore.score === 10 && state.isRun()) {
      state.setEnd();
      bestTimes.updateNewTimes(clocks[0].totalTime());
    }

  }
  if(state.isEnd()) { //Describes visuals/actions at end of game
    background('RosyBrown');
    textSize(60),
      textFont('Palatino');
    fill('SaddleBrown');
    text("Highscores!", 40, 120);
    textSize(20);
    text("Hit ENTER to play again!", 85, 300);
    bestTimes.draw();
  }
}

function mouseClicked() {
  const mole = moles[0];
  if(dist(mouseX, mouseY, mole.x, mole.y) < mole.size) {
    moleScore.scoreUp();
    mole.move();
  }
}

function keyPressed() {
  if(keyCode === ENTER && !state.isRun()) {
    state.setRun();
    moleScore.reset();
    userStartAudio();
    if(audioStarted === false) { //Prevents audio from replaying every restart
      audio.play(); //Starts the background music
      audio.loop(); //Will keep music playing
      audioStarted = true;
    }
    clocks[0].reset();
    clocks[0].running = true;
  }
}