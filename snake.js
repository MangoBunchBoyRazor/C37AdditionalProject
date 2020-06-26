class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.body = [];
        this.length = 0;
    }
    startGame(){
        textAlign(CENTER);
        textSize(20);
        text("The Snake Game!",width/2,100);
        text("Click to start",width/2,150);
        if(mouseIsPressed){
            gameState = "play";
            this.x = floor(width/scl);
            this.y = floor(height/scl);
            this.xspeed = 1;
            this.yspeed = 0;
            food.pos = food.pickNewPlace();
        }
    }
    endGame(){
        gameState = "over";
        textAlign(CENTER);
        textSize(20);
        text("Game Over!",width/2,100);
        text("Your final score: "+this.length,width/2,150);
        text("Press 'r' to restart",width/2,200);
        if(keyIsPressed && key == "r"){
            gameState = "play";
            this.x = floor(width/scl);
            this.y = floor(height/scl);
            this.xspeed = 1;
            this.yspeed = 0;
            this.body = [];
            this.length = 0;
        }
    }
    display(){
        for(let i=0;i<this.length;i++){
            rect(this.body[i].x,this.body[i].y,scl,scl);
        }
        rect(this.x,this.y,scl,scl);
    }
    move(){
        if(this.length === this.body.length){
            for(let i = 0; i<this.body.length-1; i++){
                this.body[i] = this.body[i+1];
            }
        }
        this.body[this.length -1] = {x: this.x, y: this.y};

        this.x += this.xspeed*scl;
        this.y += this.yspeed*scl;
    }
    changeDir(x,y){
        this.xspeed = x;
        this.yspeed = y;      
    }
    isTouching(type){
        if(type == "wall"){
            if(this.x < 0 || this.x > width || this.y < 0 || this.y > height)
                return true;
        }
        if(type == "self"){
            for(let i = 0; i < this.length; i++){
                if(snake.body[i] !== undefined)
                    if(dist(this.x,this.y,this.body[i].x,this.body[i].y) < 1)
                        return true;
            }
        }
        return false;
    }
    isEating(object){
        if(dist(this.x,this.y,object.pos.x,object.pos.y) < 1)
            return true;
        return false
    }
}