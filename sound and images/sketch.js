var img;
var mySound;
function preload(){
img = loadImage('M82A1_barrett.png');
  function preload() {
    mySound = loadSound('barrett.mp3');  
  }

}


function setup(){
createCanvas(1280,960);
  img.resize(800,800);
image(img, 200 , 400);
     mySound.setVolume(0 . 1);
    mySound.play();

  
}


