var img;

function preload(){
img = loadImage('M82A1_barrett.png');

}


function setup(){
createCanvas(1280,960);
  img.resize(500,700);
image(img, 500, 500);
}


