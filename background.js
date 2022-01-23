// for all new JS files, must load them into index.html!
// all sprites/entities have update and draw

class Background {
    constructor(game){
        // sprite stuff
        this.path = ASSET_MANAGER.getAsset("./sprites/bridge.jpg");
        this.x = 0;
        this.y = 0; 
        this.width = 1422;
        this.height = 768; 
        this.frameCount = 1;
        this.frameDuration = 0.2; 
        this.animator = new Animator(this.path, 0, 0, this.width, 
                this.height, this.frameCount, this.frameDuration, true);
        this.game = game;

        //bounding boxes
        
        var t = 3 // thickness

        // this.BBTop = new BoundingBox(0, 0, this.screenWidth, t);
        // this.BBLeft = new BoundingBox(0, 0, t, this.screenHeight);
        // this.BBRight = new BoundingBox(this.screenWidth-t, 0, t, this.screenHeight);
        // this.BBBottom = new BoundingBox(0, this.screenHeight-t, this.screenWidth, t);
    };

    update(){

    };

    /*
    *  param: context that we want to draw to 
    */
    draw(ctx){ 

        //ctx.drawImage(this.path, this.x, this.y, this.width, this.height);
        this.animator.drawFrame(this.game.clockTick, ctx, -199, this.y, 1);

        // // change to only display on debug ... not drawing this for some reason? 
        // if(true){
        //     this.animator.drawBoundingBox(ctx, this.BBTop);
        //     this.animator.drawBoundingBox(ctx, this.BBLeft);
        //     this.animator.drawBoundingBox(ctx, this.BBRight);
        //     this.animator.drawBoundingBox(ctx, this.BBBottom);
        // }

        // ctx.fillStyle = "red";
        // ctx.strokeStyle = "red";

        // var t = 3 // thickness

        // ctx. strokeRect(0, 0, this.screenWidth, t); //top 
        // ctx. strokeRect(0, 0, t, this.screenHeight); //left
        // ctx. strokeRect(this.screenWidth-t, 0, t, this.screenHeight); //right
        // ctx. strokeRect(0, this.screenHeight-t, this.screenWidth, t); //bottom
    };
}