var fixedRect, movingRect, left, right, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  left= createSprite(200, 400,100,20);
  left.shapeColor = "yellow";
  left.velocityX = 3;

  right = createSprite(400,400,100,20);
  right.shapeColor = "pink";
  right.velocityX = -3;

  rect1 = createSprite(400,200,20,20);
  rect1.shapeColor = "red";

  rect2 = createSprite(500,200,20,20);
  rect2.shapeColor = "red";
}

function draw() {
  background(0,0,0); 
  
  rect2.x = mouseX;
  rect2.y = mouseY;

  if (isTouching(rect1, rect2)){
    rect2.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }

  else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }

  bounceOff(left, right);
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

