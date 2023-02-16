/** @type {HTMLCanvasElement}*/
const canvas1 = document.getElementById('canvas8');
const ctx1 = canvas1.getContext('2d');
const CANVAS_WIDTH1 = canvas1.width = 700;
const CANVAS_HEIGHT1 = canvas1.height = 700;
const numberOfCircleObjects = 6;
const circleObjectArray = [];

class CircleOject {
  constructor(){
    this.width = Math.random() * 50 + 25;
    this.height = this.width;
    this.radius = Math.random() * 24 + 12;
    this.x = Math.random() * (canvas1.width - this.width);
    this.y = Math.random() * (canvas1.height - this.height)
    this.speedY= Math.random() * 20 - 10;
    this.speedX = this.speedY;
    this.colorChoices= ['green', 'blue', 'yellow']
    this.color = this.colorChoices[Math.floor(Math.random()*this.colorChoices.length)]
  }

  update(){
    this.y += this.speedY;
    this.x += this.speedX;
    if(this.x >= canvas1.width - this.radius || this.x <= 0) {
      this.speedX = this.speedX * -1;
    };
    if(this.y >= canvas1.height - this.radius || this.y <= 0){
      this.speedY = this.speedY * -1;
    }
  }

  draw(){
    ctx1.fillStyle = this.color;
    ctx1.beginPath();
    ctx1.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx1.fill();
  }

  collisionCheck(anotherCircle){
    let dx = anotherCircle.x - this.x;
    let dy = anotherCircle.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumOfRadius = this.radius + anotherCircle.radius;

    if(distance < sumOfRadius){
      return true;
    }else if (distance === sumOfRadius){
      return true;
    }else if (distance > sumOfRadius){
      return false;
    }
  }

  collision(){
    this.speedX = this.speedX * -1;
    this.speedY = this.speedY * -1;
  }
}



for (let i = 0; i < numberOfCircleObjects; i++){
  circleObjectArray.push(new CircleOject());
}

function animateCanvas2() {
  ctx1.clearRect(0,0,CANVAS_WIDTH1,CANVAS_HEIGHT1)
  for(let i = 0; i <  circleObjectArray.length;i++){
     circleObjectArray[i].update();
     circleObjectArray[i].draw();
    for(let j = 0; j <  circleObjectArray.length;j++){
      if(i != j &&  circleObjectArray[i].collisionCheck( circleObjectArray[j])){
        circleObjectArray[j].collision();
        circleObjectArray[i].collision();
       
      }
  }
}
  requestAnimationFrame(animateCanvas2);
}
animateCanvas2()

