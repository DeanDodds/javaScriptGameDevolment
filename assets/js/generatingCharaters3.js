const canvas3 = document.getElementById('canvas5');
const ctx3 = canvas3.getContext('2d');
const CANVAS_WIDTH3  = canvas3.width = 350;
const CANVAS_HEIGHT3 = canvas3.height = 700;
const enemyArray3 = [];

class Enemy3 {
    constructor(){
        this.image = new Image()
        this.image.src = './assets/images/enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth  = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height)
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 2 + 0.5;
        this.curve = Math.random() * 200 + 100;
    }
    update(){
        this.x = canvas3.width/2 * Math.cos(this.angle * Math.PI/90) + (canvas3.width/2 - this.width/2) ;
        this.y = canvas3.height/2 * Math.sin(this.angle * Math.PI/270) + (canvas3.height/2 - this.height/2) ;
        this.angle +=  this.angleSpeed;
        if(this.x + this.width < 0) this.x = canvas2.width;
        // animate sprite
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++ ;
        }
    }
    draw(){
        ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight ,this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray3.push(new Enemy3());
}


function animateOnCanvas3(){
    ctx3.clearRect(0,0, CANVAS_WIDTH3, CANVAS_HEIGHT3)
    enemyArray3.forEach(object => {
        object.update();
        object.draw();
    });
    gameFrame++
    requestAnimationFrame(animateOnCanvas3)
}
animateOnCanvas3()