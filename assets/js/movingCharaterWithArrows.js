const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

class Person{
    constructor(){
        this.spriteWidth = 64;
        this.spriteHeight = 64;
        this.width = this.spriteWidth * 4;
        this.height = this.spriteHeight * 4;
        this.x = (canvas.width / 2) - (this.width / 2);
        this.y = (canvas.height / 2) - (this.height / 2);
        this.positionX = 0;
        this.positionY = 0;
        this.maxFrame = 8;
        this.image = new Image();
        this.image.src = "./assets/images/professor.png";
        this.walkSpeed = 5;
    }
    walkForward(){
        this.positionY = 0;
        this.positionX++;
        console.log(this.y)
        if (this.positionX > this.maxFrame)this.positionX = 1;
        if(this.y >= 0 - this.spriteHeight)this.y -= this.walkSpeed;
    }
    walkRight(){
        this.positionY = 3;
        this.positionX++ ;
        if (this.positionX > this.maxFrame)this.positionX = 0;
        if(this.x < canvas.width - this.width/2)this.x += this.walkSpeed;
    };

    walkLeft(){
        this.positionY = 1;
        this.positionX++ ;
        if (this.positionX > this.maxFrame)this.positionX = 0;
        if(this.x <= 0 - this.width/2)this.x += this.walkSpeed;this.x -= this.walkSpeed;
    };

    walkBack(){
        this.positionY = 2;
        this.positionX++ ;
        if (this.positionX > this.maxFrame)this.positionX = 1;
        if(this.y <= canvas.height - this.height)this.y += this.walkSpeed;
    };
    standStill(){
        this.positionX=0;
    };


    draw(){
        context.drawImage(this.image, this.positionX * this.spriteWidth, this.positionY * this.spriteHeight, this.spriteWidth, this.spriteHeight,this.x, this.y, this.width, this.height);
    };
}

const professor = new Person();

window.addEventListener('keydown', function(e){
    e.preventDefault();
    const direction = e.key;
    switch (direction) {
      case "ArrowUp":
        professor.walkForward();
        break;
      case "ArrowDown":
        professor.walkBack();
        break;
      case "ArrowRight":
        professor.walkRight();
        break;
      case "ArrowLeft":
        professor.walkLeft();
        break;
      default:
        console.log('use arrow keys only')
    }
});

window.addEventListener('keyup', function(){
    professor.standStill();
});

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height)
    professor.draw();


    requestAnimationFrame(animate)
};
animate();
