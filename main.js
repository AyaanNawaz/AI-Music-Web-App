song=""

function preload(){
song1 = loadSound("music1.mp3");
song2 = loadSound("music2.mp3");
}

function draw(){
image(video, 0, 0, 600, 500)
}

function setup(){
canvas = createCanvas(600, 500);
video= createCapture(VIDEO);
video.hide();
canvas.center();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("Model Is Loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}

}

