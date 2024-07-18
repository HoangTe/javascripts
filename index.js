var  p = 10;
var g = 0;
var l = setInterval(delayAlert, 1000);
function delayAlert() {
    if (g < 10)
        console.log(p + " : 0" + g);
    else
        console.log(p + " : " + g);
    g--;    
    if (g < 0) {
        g = 59; 
        p--;
    }
    if (p < 0) {
        clearInterval(l);
    }
}