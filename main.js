noseX=0
noseY=0
difference=0
right_wrist_X=0
left_wrist_X=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
} 

function modelLoaded(){
    console.log("poseNet model is initialized 🎉");
}

function draw(){
    background('#969A97');
    document.getElementById("square_sides").innerHTML="Width and height of the square will be: "+difference+"px"
    fill('#f90093');
    stroke('#f90092');
    square(noseX,noseY,difference);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY= "+noseY);
        left_wrist_X=results[0].pose.leftWrist.x;
        right_wrist_X=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_X-right_wrist_X); //👀
        console.log("left_wrist_X= "+left_wrist_X+"right_wrist_X"+right_wrist_X+"difference😁"+difference);
    }
}