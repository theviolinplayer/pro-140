function preload(){
    loadSound("missed.wav");
    loadSound("ball_touch_paddel.wav")
}

function setup() {
	canvas = createCanvas(300, 300);
    canvas.center()
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(300,300);
    video.hide()
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function draw(){
    img(video, 0, 0, 300, 300);
}
