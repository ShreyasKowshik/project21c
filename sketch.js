var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

 box1=createSprite(0,580,360,30)
box1.shapeColor="red"

box2=createSprite(295,580,180,30)
box2.shapeColor="blue"

box3=createSprite(515,580,180,30)
box3.shapeColor="green"

box4=createSprite(740,580,180,30)
box4.shapeColor="yellow"

ball=createSprite(random(0,800),150,35,35)
ball.shapeColor='black'
ball.velocityX=3
ball.velocityY=7


}

function draw() {
    background(rgb(169,169,169));

edges=createEdgeSprites()
ball.bounceOff(edges)

music.play()

if(ball.isTouching(box1)){
    ball.shapeColor="red"
    ball.bounceOff(box1)
}

if(ball.isTouching(box2)){
    ball.shapeColor="blue"
    ball.bounceOff(box2)
}

if(ball.isTouching(box3)){
    ball.shapeColor="green"
    ball.bounceOff(box3)
}

if(ball.isTouching(box4)){
    ball.shapeColor="yellow"
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
}



  drawSprites()

}
