var trex;
var ground;
var bg;
var bgImage;

function preload(){
bgImage = loadImage("tower.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(width/2,height,width,height)
  bg.addImage("tower",bgImage)
  bg.x = width/2
  bg.velocityX = -5
  bg.scale = 1.67
  trex = createSprite(250,520,50,50)
  trex.shapeColor = "Yellow"
  trex.velocityX = 2.5
}

function draw(){
  background(0)

  if(bg.x<0){
    bg.x = width/2
  }
  // if(keyDown("up")){
  //   trex.y = +
  // }
  drawSprites()
}