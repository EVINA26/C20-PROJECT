var garden;
var cat,ci1,ci2,ci4;
var mouse,mi1,mi2,mi4;

function preload() {

garden=loadImage("images/garden.png");
//cat 
ci1=loadAnimation("images/cat1.png");
ci2=loadAnimation("images/cat2.png" ,"images/cat3.png");
ci4=loadAnimation("images/cat4.png");

//mouse
mi1=loadAnimation("images/mouse1.png");
mi2=loadAnimation("images/mouse2.png" ,"images/mouse3.png");
mi4=loadAnimation("images/mouse4.png");



    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat=createSprite(800,600);
 cat.addAnimation("sleep",ci1);//adding img/animation
 cat.scale=0.2;

 mouse=createSprite(200,600);
 mouse.addAnimation("stand",mi1);
 mouse.scale=0.2;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("cat",ci4);
       cat.x=300;
       cat.changeAnimation("cat")

       mouse.addAnimation("img",mi4);
       mouse.changeAnimation("img");
    }
    drawSprites();
}



function keyPressed(){

    //For moving and changing animation write code here
     if(keyCode===LEFT_ARROW){
         cat.velocityX=-5;
         cat.addAnimation("run",ci2);
         cat.changeAnimation("run");
         
         mouse.addAnimation("tease",mi2);
         mouse.frameDelay=25;
         mouse.changeAnimation("tease");
  
     }
  }
