//https://teachablemachine.withgoogle.com/models/E2HAKlsKH/
Webcam.set({
    width:300,
    height:350,
    quality:90,
    image_format:"png",
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='cature_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",mlf.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E2HAKlsKH/" ,modelLoader);
function modelLoader(){
   console.log(model.modelLoader);
}