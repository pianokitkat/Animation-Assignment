class Animator {
   constructor(path, xStart, yStart, width, height, frameCount, frameDuration){
        //add instance varaibles that are of the same name 
        Object.assign(this, {path, xStart, yStart, width, height, frameCount, frameDuration});
        this.elapsedTime = 0; 
        this.totalTime = frameCount + frameDuration;
   };

   drawFrame(tick, ctx, x, y, scale){
       this.elapsedTime += tick;
       if(this.elapsedTime > this.totalTime){
            this.elapsedTime -= this.totalTime; // disapears for a few frames
            this.elapsedTime = 0; // 0 means wrong frame for 1 frame
       }
       const frame = this.currentFrame();

       ctx.drawImage(this.path, 
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width*scale, this.height*scale)
    };

    drawBoundingBox(ctx, BB){
          ctx.strokeStyle = "red";
          ctx. strokeRect(BB.x, BB.y, BB.width, BB.height);
    }

    currentFrame(){
        //return Math.floor(this.elapsedTime / this.frameDuration); 
       
        return (Math.floor(this.elapsedTime / this.frameDuration)% this.frameCount); // mod now has it 
        
    }

   isDone(){
        return (this.elapsedTime >= this/totalTime);
   };
};