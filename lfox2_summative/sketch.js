let level=0;
let hockeybackground;
let coup;
let fight;
function preload(){
  hockeybackground=loadImage('hockey.png');
  coup=loadImage('coup.png')
  fight=loadImage('fight.png')
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
if (level===0){

  background(0);
  textSize(50);
  fill(0,255,17)
  text('PRESS ENTER TO START',300,300);
  fill(255);
textSize(45,45)
  text('Answer the questions by pressing one of the 3 key options',30,450);

  if(keyIsDown(13)){
    level+=1;
    }
  }
//level 1

if(level===1){
background(0)
  background(hockeybackground);
  textSize(50);
  fill(0);
  text('What new team is coming to the NHL?',200,400);
  text('1',110,600);
text('Seattle',110,550);
if(keyIsDown(49)){
  level=2;
}
text('Vegas',550,550);
text('2',550,600)
if(keyIsDown(50)){
  level=20;
}
text('3',1000,600)
text('Quebec',1000,550);
if(keyIsDown(51)){
  level=20;
}

}
//level 2

if(level===2){
  coup.resize(400,700);
background(0,230,255);
image(coup,400,100);
text('Which team has won the most Stanley cups?',200,400);
text('4',110,600)
text('Montreal',110,550);
if(keyIsDown(52)){
  level+=1;
}
text('Toronto',550,550);
text('5',550,600)
if(keyIsDown(53)){
  level=20;
}
text('6',1000,600)
text('Detriot',1000,550);
if(keyIsDown(54)){
  level=20;
}

}
//level 3

if (level===3){
background(255,0,0);
fight.resize(400,400)
image(fight,400,5);
text('Who has been in the most fights in the NHL?',200,450)
text('9',1000,650)
text('Chris Nilan',1000,600);
if(keyIsDown(57)){
  level=20;
}
if(keyIsDown(56)){
level+=1
}
fill(0)
text('8',550,650);
text('Tie Domi',550,600);
if(keyIsDown(55)){
level=20;
}
fill(0)
text('7',80,650);
text('Dave Williams',50,600);
if(keyIsDown(55)){
  level=20;
}
}
//level 4

if (level===4){
background(0,85,255)
fill(0)
text ('Which player had the most points this past season?',100,350)
text('Conor McDavid',50,550)
text('A',110,600)
if (keyIsDown(65)){
level=20;
}
text('Patrick Kane',450,550);
text('B',550,600)

if (keyIsDown(66)) {
level=20
}
text('Nikita kucherov',850,550);
text('c',1000,600);
if (keyIsDown(67)){
level+=1
}
}
//final level

if (level===5){
background(34,255,0)
text('Congratulations you won!!!',400,350);

}


if(level===20){
  background(0);
  fill(255,1,1);

  text('You died press R to restart ',300,300);
if(keyIsDown(82))
level=1
  }





}
