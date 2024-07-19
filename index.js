// var level = 0;
var f = document.getElementById("fan");
var rotation = 0;
var speed = 0;

setInterval(function (){
    rotation += speed;
    f.style.transform = "rotate(" + -rotation + "deg)";
}, 10);

function offFan() {
    speed = 0;
}
function onFan(s) {
speed = {
    1: 10,
    2: 20,
    3: 30,
}[s];
}