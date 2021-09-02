var boy, path
var boyImg, pathImg
var invisibleWall1, invisiblWall2


function preload(){
 boyImg=loadAnimation ("Runner-1.png", "Runner-2.png");
 pathImg=loadImage ("path.png");

}

function setup(){
  createCanvas(400,400);

path=createSprite(200,200,50,50);
path.addImage("path", pathImg);
path.scale=1.3;
path.velocityY=4;

boy=createSprite(180,300,50,100);
boy.addAnimation("boy", boyImg);
boy.scale=0.05;

invisibleWall1=createSprite(15,200,20,400)
invisibleWall1.visible=false;

invisibleWall2=createSprite(380,200,20,400)
invisibleWall2.visible=false;
  
}

function draw() {
background(0);

if (path.y > 420){
path.y=height/2
}

boy.x = mouseX;

boy.collide(invisibleWall1);
boy.collide(invisibleWall2);

drawSprites();
}
