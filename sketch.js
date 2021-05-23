var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg = loadImage("aladdin_cave.jpg");

  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  canvas = createCanvas(1000,500);

  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  
  

  background(bg);

  security.display();

  clues();
 
  textSize(30);
  fill("white");
  text("SCORE : " + score, 450, 50);

  // add code for changing the background to the treasure background
  
  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    stroke("black");
    text("TREASURE UNLOCKED!!",100, 450);
    text("_____________________",105, 455);

    security.yay1.hide();
    security.yay2.hide();
    security.yay3.hide();
  }

  

  drawSprites()
}