var bg,bg2,form,system,code,security;
var score=0;
var securityCode1, securityCode2, securityCode3;
var locksOpened = 0;
var fadingBackground;
var visibility = 255;
var locksOpenSound;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("aladdin_cave.jpg");
  locksOpenSound = loadSound("locksOpen.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  system = new System();
  security = new Security();
  fadingBackground = createSprite(width/2,height/2);
  fadingBackground.visible = false;
  fadingBackground.addImage(bg2);
}

function draw() {
  background(bg);
  if(locksOpened < 6){  
    clues();
  }
  security.display();
  System.open();

  drawSprites();
//  text(locksOpened,100,100);
}