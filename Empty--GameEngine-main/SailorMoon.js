// for all new JS files, must load them into index.html!
// all sprites/entities have update and draw

class SailorMoon {
    constructor(game){
        this.path = ASSET_MANAGER.getAsset("./sprites/coin.png");
        this.startX = 0
        this.startY = 0; 
        this.width = 200;
        this.height = 1115, 
        this.frameCount = 6;
        this.frameDuration = 0.2; 
        this.animator = new Animator(this.path, this.startX, this.startY, this.width, this.height, this.frameCount, this.frameDuration);
        this.game = game;

        this.speed = 0;
        this.x = 0;
        this.y = 0;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024){
            this.x = 0;
        }

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