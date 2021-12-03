var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (300, 90, 50, 50);
  box.shapeColor = "lime";
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 1;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 1;
  }
}




