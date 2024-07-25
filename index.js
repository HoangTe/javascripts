// // var level = 0;
// var f = document.getElementById("fan");
// var rotation = 0;
// var speed = 0;

// setInterval(function (){
//     rotation += speed;
//     f.style.transform = "rotate(" + -rotation + "deg)";
// }, 10);

// function offFan() {
//     speed = 0;
// }
// function onFan(s) {
// speed = {
//     1: 10,
//     2: 20,
//     3: 30,
// }[s];
// }

// function openSubmenu(e) {
//     hideSubmenu();
//     var sub = e.lastElementChild;
//     sub.style.display = "block";
// }
// function hideSubmenu() {
//     var subs = document.getElementsByClassName('submenu');
//     for (var s of subs) {
//         s.style.display = "none";
//     }
// }

function showLoginForm(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'block';
}
function hideLoginForm() {
    document.querySelector('.login-container').style.display = 'none';
}