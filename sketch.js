var mario, marioImage,wallImage,flagImage,groundImage,obstacleImage;
var platformGroup;
//load all images as global variable
function preload(){
  marioImage = loadImage("images/1.png")
  wallImage = loadImage("images/wall.png")
  flagImage = loadImage("images/flag.png")
  groundImage = loadImage("images/ground.png")
  obstacleImage = loadImage("images/obstacle1.png")
}

function setup() {
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;

  mario = new Player();
  mario.spt.addImage(marioImage)
  
  
  platformGroup= createGroup();

  
  for (var i=0;i<14;i++) {
      platform = new Platform(countDistanceX);
      platform.spt.addImage(groundImage)
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap;
   }
 
}

function draw() {
  background('skyblue');

  translate(  -mario.spt.x + width/2 , 0);
  
  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if (keyDown("left"))   { 
    mario.moveLeft();
  }
  if (keyDown("right")) { 
    
    mario.moveRight();
  }
  if (keyDown("up")) { 
    mario.jump();
  }
   drawSprites();
}



