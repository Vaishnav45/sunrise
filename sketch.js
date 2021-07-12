const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
background(backgroundImg)
}
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30)
if(hour>=12){
    text("time"+hour%12+"pm",100,50)
}
else if(hour<=12){
    text("time"+hour%12+"am"     , 100,50)
}
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
var datetime = responseJSON.datetime
    hour = datetime.slice(11,13)
    console.log(hour)

    if(hour>=4 && hour<=6 ){
        bg = "sunrise1.png";
     } else if(hour>=6 && hour<=8 ){
            bg = "sunrise2.png";
        } else if(hour>=8 && hour<=10 ){
            bg = "sunrise3.png";
        } else if(hour>=10 && hour<=12 ){
            bg = "sunrise4.png";    
    } else{bg = "sunset9.png"}
backgroundImg = loadImage(bg)
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
