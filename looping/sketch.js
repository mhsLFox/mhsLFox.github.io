function setup() {
    createCanvas(1100, 800)
    background(0)
}

function draw() {

for (let x=0; x<300; x++){

fill (98, 244, 66);
rect (random(1100), random(800),10,10);
fill(0)
rect (random(1100), random(800),10,10);
}

}
