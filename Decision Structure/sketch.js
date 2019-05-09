let x=100;
let y=100;
let x2= 1180
let y2=100
let hit=false
let level=0;

function setup() {
//canvas size
  createCanvas(windowWidth, windowHeight);
}
function draw(){

if(level===0){
  background(255);
  textSize(60);
  text('pink needs to catch orange to win',200,300);
  text('press enter to start',250,450);
 
  if(keyIsDown(13)){
    level+=1;

  }
}


//first level
if(level===1){

  background(0,255,178);
  fill(255,87,51);
  ellipse(x,y,50,50);
  fill(244, 66, 215)
  ellipse(x2,y2,50,50)
  hit = collideCircleCircle(x,y,50,x2,y2,50)


if (keyIsDown(LEFT_ARROW)){
  x-=5;
}

if (keyIsDown(RIGHT_ARROW)){
  x+=5;

}

if (keyIsDown(UP_ARROW)){
  y-=5;

}

if (keyIsDown(DOWN_ARROW)){
  y+=5;

}

if (keyIsDown(65)){
x2-=5;

}

if (keyIsDown(68)){
  x2+=5;

}

if (keyIsDown(87)){
  y2-=5;
}

if (keyIsDown(83)){
  y2+=5;
}

  if (hit===true){
  level+=1;
  }
}

  //second level
if (level===2){
  background(0);
  textSize(50);
  text('PINK WINS',300,300);
  textSize(45);
  text('PRESS ENTER TO MIGRATE TO FINAL SCREEN',200,450);

  if(keyIsDown(13)){
    level+=1;
  }

}

  //third level
if(level===3){
  background(201,207,30);
  textSize(40);
  text('YOU WIN AN HOUR AT THE LA SWINGERS CLUB',50,400);
  text('curtosy of Jonhannessburg the fifth from the holy Swedish bible',50,600);

}






}
