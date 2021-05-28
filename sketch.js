var fixedRect, movingRect;

var r1,r2,r3,r4;

var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "crimson";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "crimson";
  //movingRect.debug = true;

  r1 = createSprite(100,100,50,50);
  r1.shapeColor = "crimson";
  r2 = createSprite(200,100,50,50);
  r2.shapeColor = "crimson";
  r3 = createSprite(300,100,50,50);
  r3.shapeColor = "crimson";
  r4 = createSprite(400,100,50,50);
  r4.shapeColor = "crimson";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,r4)){
    movingRect.shapeColor = "lightblue";
  r4.shapeColor = "lightblue";
  }else{
    movingRect.shapeColor = "crimson";
  r4.shapeColor = "crimson";
  }

  drawSprites();
}

