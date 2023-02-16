/** @type {HTMLCanvasElement}*/
const canvas = document.getElementById('canvas7');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 700;
const numberOfObjects = 5;
const objectArray = [];

class SquareOject {
  constructor(){
    this.width = Math.random() * 50 + 25;
    this.height = this.width;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height)
    this.speedY= Math.random() * 20 - 10;
    this.speedX = this.speedY;
    this.colorChoices= ['green', 'blue', 'yellow']
    this.color = this.colorChoices[Math.floor(Math.random()*this.colorChoices.length)]
  }

  update(){
    this.y += this.speedY;
    this.x += this.speedX;
    if(this.x >= canvas.width - this.width || this.x <= 0) {
      this.speedX = this.speedX * -1;
    };
    if(this.y >= canvas.height - this.height || this.y <= 0){
      this.speedY = this.speedY * -1;
    }
  }

  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  changeColor(){
    
  }

  collisionCheck(anotherSquare){
   if(this.x > anotherSquare.x + anotherSquare.width ||
    this.x + this.width < anotherSquare.x ||
    this.y > anotherSquare.y + anotherSquare.height ||
    this.y + this.height < anotherSquare.y){
      return true
    }else {
      return false
    }
  }

  collision(){
    this.speedX = this.speedX * -1;
    this.speedY = this.speedY * -1;
  }
}



for (let i = 0; i < numberOfObjects; i++){
  objectArray.push(new SquareOject());
}

function animate() {
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
  for(let i = 0; i < objectArray.length;i++){
    objectArray[i].update();
    objectArray[i].draw();
    for(let j = 0; j < objectArray.length;j++){
      if(i != j && objectArray[i].collisionCheck(objectArray[j])){
        objectArray[j].collision();
        objectArray[i].collision();
       
      }
  }
}
  requestAnimationFrame(animate);
}
animate()

