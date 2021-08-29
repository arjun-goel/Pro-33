const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine,world;
var tomOne,tomTwo
var bg_img;

function preload()
{
bg_img = loadImage("snow2.jpg");
tomOne = loadAnimation("tomOne.png")
tomTwo = loadAnimation("tomTwo.png","tomThree.png")
}


function setup() {
  createCanvas(1400,700);
  engine= Engine.create()
  world= engine.world;
 imageMode(CENTER)

cat = createSprite(1000,500,50,50)
cat.addAnimation("tom_sitting",tomOne)
cat.scale = 0.1;
}

function draw() {
 // background(bg_img);
 image(bg_img,400,200,1400,700)
  drawSprites();
}
function keyPressed(){
if(keyCode === LEFT_ARROW){
  cat.velocityX = -4
  cat.addAnimation("tom_running",tomTwo)
  cat.changeAnimation("tom_running")
}
}

