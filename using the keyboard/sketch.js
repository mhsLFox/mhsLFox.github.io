let x=100;
let y=100;


function setup() {
//put set upcode here
  createCanvas(1280,877.49);

}
function draw(){
//put drawing code here
background(0,128,0);
fill(127,0,255);
rect(x,y,50,50);

if (keyIsDown(LEFT_ARROW)){
x-=50;
}

if (keyIsDown(RIGHT_ARROW)){
  x+=50;
}

if (keyIsDown(UP_ARROW)){
y-=50;
}

if (keyIsDown(DOWN_ARROW)){
y+=50; }

}
