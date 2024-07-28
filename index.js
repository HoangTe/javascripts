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

function openSubmenu(e) {
    hideSubmenu();
    var sub = e.lastElementChild;
    sub.style.display = "block";
}
function hideSubmenu() {
    var subs = document.getElementsByClassName('submenu');
    for (var s of subs) {
        s.style.display = "none";
    }
}

function showLoginForm(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'block';
}
function hideLoginForm() {
    document.querySelector('.login-container').style.display = 'none';
}

// function enterKeyDown(){
//     var ipx = document.getElementById("ipx");
//     var v = ipx.value;
//     console.log(`Key down...:${v}`);
// }
// function enterKeyUp(e){
//     var v = e.value;
//     console.log(`Key up...:${v}`);
//     if(Event.keyCode == 13 && v.length < 6){
//         var msg = document.getElementById('msg');
//         msg.innerText = "Nhập tối thiểu 6 kí tự";
//         msg.style.display='block';
//     }
// }

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateEmail(){
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "Exaclly";
        emailError.style.color = "green";
    }
}

function validatePassword(){
    const password = passwordInput.value;
    if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.color = 'red';
    }else{
        passwordError.textContent = "Exaclly";
        passwordError.style.color = 'green';
    }

}