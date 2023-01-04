function preload(){

}

function draw(){
image(video, 0, 0, 700, 545)
}

function setup(){
canvas = createCanvas(700, 545);
video= createCapture(VIDEO);
video.hide();
canvas.center();
}