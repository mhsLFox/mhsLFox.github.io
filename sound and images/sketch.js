var img;

function preload(){
img = loadImage('M82A1_barrett.png');

}


function setup(){
createCanvas(1280,960);
  img.resize(100,100);
image(img, 640, 480);
}


