//For mole!!!

class Mole {
  constructor() {
    this.x = (random(50, width - 50));
    this.y = (random(100, height - 50));
    this.size = 50;
    this.lastTime = millis();
  }
  update(){
    if(millis() - this.lastTime > 1000) {
      this.move();
    }
  }
  move(){
    this.x = (random(this.size, width - this.size));
    this.y = (random(this.size * 2, height - this.size));
    this.lastTime = millis();
  }
  draw(){
    textSize(this.size);
    text('🦫', this.x, this.y);
  }

}