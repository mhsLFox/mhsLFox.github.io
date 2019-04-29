var img;

function preload(){
img = loadImage('M82A1_barrett.png');

}


function setup(){
createCanvas(1280,960);
  img.resize(800,800);
image(img, 200, 400);
}


