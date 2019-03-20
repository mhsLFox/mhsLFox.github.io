/*
house assignmentnew
created by liam fox
march 18 2019
*/
function setup() {
  // put setup code here
createCanvas(2000,1600);
}
function draw() {
  // put drawing code here
let housewidth=800;
background(135,206,250)
// main part of the house
fill(222,184,135)
rect(width/2,height/2, housewidth, housewidth/2);
//roof
fill(200,200,200)
triangle(width/2,height/2,width/2+housewidth,height/2,width/2+housewidth/2, height/2-height/5);
//windows
fill(255,255,255)
rect(width/1.8,height/1.8, housewidth/6, housewidth/6)
rect(width/1.3,height/1.8, housewidth/6, housewidth/6)
//door
fill(0,0,0)
rect(width/1.5,height/1.6, housewidth/7.5, housewidth/4)
//door handle
fill(218,165,32)
ellipse(width/1.41,height/1.45,height/70,height/70)
}
