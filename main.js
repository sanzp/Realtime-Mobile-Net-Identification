function setup()
{
    canvas = createCanvas(550,400);
    canvas.position(400,360);
    video = createCapture(VIDEO);
    video.hide()
    classifier = ml5.imageClassifier("MobileNet",modelLoaded)
}
function modelLoaded()
{
    console.log("Model Loaded successfully!")
}
function draw()
{
image(video,0,0,550,380);
classifier.classify(video,gotResults)
}
function gotResults(error,results)
{
if(error){
    console.error(error);
}
else{
    console.log(results)
    document.getElementById("object").innerHTML = "Object : " + results[0].label;
    document.getElementById("acc").innerHTML = "Accuracy : " + results[0].confidence.toFixed(3);
}
}