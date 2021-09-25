function preload(){
mustache=loadImage("https://i.postimg.cc/d3By51Tr/mustache.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
    

}
function modelLoaded(){
    console.log("PoseNet is initialized");

}
var noseX=0;
var noseY=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y;

        console.log("noseX="+noseX);
        console.log("nosey="+noseY);   
    }

    
}
function draw(){
    image(video,0,0,300,300);

    //fill (255,0,0);
   // stroke (255,0,0);
    //circle(noseX,noseY,20);
    image (mustache,noseX,noseY,40,30);


}
function take_snapshot(){
    save("myFilterimage.png");
    
}

