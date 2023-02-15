const canvas2 = document.getElementById('canvas4');
const ctx2 = canvas2.getContext('2d');
const CANVAS_WIDTH2  = canvas2.width = 350;
const CANVAS_HEIGHT2 = canvas2.height = 700;
const enemyArray2 = [];

class Enemy2 {
    constructor(){
        this.image = new Image()
        this.image.src = './assets/images/enemy2.png'
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height)
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }
    update(){
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle +=  this.angleSpeed;
        if(this.x + this.width < 0) this.x = canvas2.width;
        // animate sprite
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++ ;
        }
    }
    draw(){
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight ,this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray2.push(new Enemy2());
}

function animateOnCanvas2(){
    ctx2.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemyArray2.forEach(object => {
        object.update();
        object.draw();
    });
    gameFrame++
    requestAnimationFrame(animateOnCanvas2)
}
animateOnCanvas2()