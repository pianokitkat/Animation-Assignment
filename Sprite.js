// for all new JS files, must load them into index.html!
// all sprites/entities have update and draw

class Sprite {
    constructor(game){
        //screen size stuff
        /* width="1024" height="768" */
        this.screenWidth = 1024;
        this.screenHeight = 768;

        // sprite stuff
        this.path = ASSET_MANAGER.getAsset("./sprites/coin.png");
        this.startX = 0
        this.startY = 0; 
        this.width = [169, 128 ,78, 38, 78, 128]; //widths of frames without padding
        this.widthPad = 200; // width of sprites with padding
        this.height = 169, 
        this.frameCount = 6;
        this.currFrame = 0;
        this.frameDuration = 0.2; 
        this.animator = new Animator(this.path, this.startX, this.startY, this.widthPad, this.height, this.frameCount, this.frameDuration);
        this.game = game;

        //bounding box
        this.BB = new BoundingBox(this.x + (this.widthPad-this.width[this.animator.currentFrame()])/2, 
            this.y, this.width[this.animator.currentFrame()], this.height);

        // speed stuff
        this.speed = 50;
        this.speedX = this.speed;
        this.speedY = -this.speed;

        //randomize start location later
        this.x = 0;
        this.y = this.screenHeight / 2;
    };

    update(){
        if(this.x < 0 && this.y < this.screenHeight/2){
            this.speedX = this.speed;
            this.speedY = -this.speed;
        }else if(this.x > this.screenWidth/2 && this.y < 0){
            this.speedX = this.speed;
            this.speedY = this.speed;
        }else if(this.x > this.screenWidth && this.y > this.screenHeight/2){
            this.speedX = -this.speed;
            this.speedY = this.speed;
        }else if(this.x < this.screenWidth/2 && this.y >  this.screenHeight){
            this.speedX = -this.speed;
            this.speedY = -this.speed;
        }

        // update sprite
        this.x += this.speedX * this.game.clockTick;
        this.y += this.speedY * this.game.clockTick;

        // update bounding box 
        //this.BB = new BoundingBox(this.x, this.y, this.widthPad, this.height);
        this.BB = new BoundingBox(this.x + (this.widthPad-this.width[this.animator.currentFrame()])/2, 
                this.y, this.width[this.animator.currentFrame()], this.height); 
    };

    /*
    *  param: context that we want to draw to 
    */
    draw(ctx){ 
        // draw entire sprite sheet for testing
        //ctx.drawImage(this.path, 0, 0, 544, 108); 

        //draw part of an image
        /* pixels (5, 0) to (40, 106)  
        *  draw at (100, 100)
        *  size of 40 x 106
        */
        //ctx.drawImage(this.path, 5, 0, 45, 106, 0, 0, 40, 106); 

        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1)

        // change to only display on debug
        if(true){
            this.animator.drawBoundingBox(ctx, this.BB);
        }


        // intensive to draw everything with commands
        //  so easier to draw an image
        // ctx.fillStyle = "Black";
        // ctx.strokeStyle = "red";

        // ctx. strokeRect(100, 110, 100, 100);

        // ctx.beginPath();
        // ctx.arc(50, 50, 25, 0, 2*Math.PI);
        // ctx.fill();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(100, 100);
        // ctx.lineTo(200, 100);
        // ctx.stroke();
    };
}