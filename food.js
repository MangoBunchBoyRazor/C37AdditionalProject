class Food{
    constructor(){
        this.pos = this.pickNewPlace();
    }
    pickNewPlace(){
        let cols = width/scl;
        let rows = height/scl;
        return {x: floor(random(0,cols))*scl, y: floor(random(0,rows))*scl};
    }
    display(){
        push();
        noStroke();
        fill(255,255,0);
        rect(this.pos.x,this.pos.y,scl,scl);
        pop();
    }
}