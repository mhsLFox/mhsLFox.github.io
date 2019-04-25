let img;



function preload(){

img= loadImage('M82A1_barrett.png');

}


function setup(){
createCanvas(windowWidth,windowHeight);
background(0);

}
function draw(){
image(img,200,200);

}
