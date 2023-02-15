const canvas4 = document.getElementById('canvas6');
const ctx4 = canvas4.getContext('2d');
const CANVAS_WIDTH4  = canvas4.width = 350;
const CANVAS_HEIGHT4 = canvas4.height = 700;
const enemyArray4 = [];

class Enemy4 {
    constructor(){
        this.image = new Image()
        this.image.src = './assets/images/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth  = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas4.width - this.width);
        this.y = Math.random() * (canvas4.height - this.height)
        this.newX = Math.random() * (canvas4.width - this.width);
        this.newY = Math.random() * (canvas4.height - this.height)
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
    }
    update(){
        if(gameFrame % this.interval === 0){
            this.x = Math.random() * (canvas4.width - this.width);
            this.y = Math.random() * (canvas4.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;

        this.x -= dx/20;
        this.y -= dy/20;

        if(this.x + this.width < 0) this.x = canvas2.width;
        // animate sprite
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++ ;
        }
    }
    draw(){
        ctx4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight ,this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray4.push(new Enemy4());
}


function animateOnCanvas4(){
    ctx4.clearRect(0,0, CANVAS_WIDTH4, CANVAS_HEIGHT4)
    enemyArray4.forEach(object => {
        object.update();
        object.draw();
    });
    gameFrame++
    requestAnimationFrame(animateOnCanvas4)
}
animateOnCanvas4()