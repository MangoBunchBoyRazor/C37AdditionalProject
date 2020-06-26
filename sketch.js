var snake, food;
var scl, gameState;
function setup(){
    createCanvas(400,400);

    scl = 20;
    gameState = "start";
    frameRate(10);

    snake = new Snake();
    food = new Food();

}
function draw(){
    background(200);

    if(gameState == "start")
        snake.startGame();
    else if(gameState == "play"){
        snake.move();
        snake.display();
        food.display();

        if(snake.isEating(food)){
            snake.length++;
            food.pos = food.pickNewPlace();
        }

        push();
        textAlign(CENTER);
        textSize(17);
        text("Score: "+snake.length,width-100,50);
        pop();
    }
    else if(gameState == "over")
        snake.endGame();

    if(snake.isTouching("self") || snake.isTouching("wall"))
        snake.endGame();
}
function keyPressed() {
    if(keyCode === UP_ARROW)
        snake.changeDir(0,-1);
    if(keyCode === DOWN_ARROW)
        snake.changeDir(0,1);
    if(keyCode === LEFT_ARROW)
        snake.changeDir(-1,0);
    if(keyCode === RIGHT_ARROW)
        snake.changeDir(1,0);
}