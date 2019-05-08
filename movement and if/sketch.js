
let x=100;
let y=100;


function setup() {
//put set upcode here
  createCanvas(1280,877.49);

}
//circle fill color and background
function draw(){
//put drawing code here
background(0,255,178);
fill(255,87,51);
ellipse(x,y,50,50);

//how the circle moves  
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
