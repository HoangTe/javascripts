
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

// function showLoginForm(event) {
//     event.preventDefault();
//     document.querySelector('.login-container').style.display = 'block';
// }
// function hideLoginForm() {
//     document.querySelector('.login-container').style.display = 'none';
// }

// // function enterKeyDown(){
// //     var ipx = document.getElementById("ipx");
// //     var v = ipx.value;
// //     console.log(`Key down...:${v}`);
// // }
// // function enterKeyUp(e){
// //     var v = e.value;
// //     console.log(`Key up...:${v}`);
// //     if(Event.keyCode == 13 && v.length < 6){
// //         var msg = document.getElementById('msg');
// //         msg.innerText = "Nhập tối thiểu 6 kí tự";
// //         msg.style.display='block';
// //     }
// // }

// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('email-error');
// const passwordInput = document.getElementById('password');
// const passwordError = document.getElementById('password-error');
// emailInput.addEventListener('input', validateEmail);
// passwordInput.addEventListener('input', validatePassword);

// function validateEmail(){
//     const email = emailInput.value;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//         emailError.textContent = "Invalid email format";
//         emailError.style.color = "red";
//     } else {
//         emailError.textContent = "Exaclly";
//         emailError.style.color = "green";
//     }
// }

// function validatePassword(){
//     const password = passwordInput.value;
//     if(password.length < 6){
//         passwordError.textContent = "Password must be at least 6 characters";
//         passwordError.style.color = 'red';
//     }else{
//         passwordError.textContent = "Exaclly";
//         passwordError.style.color = 'green';
//     }

// }



// var url = `https://dummyjson.com/products/category-list`;
// fetch(url).then(function(rs){
//     return rs.json();
// })
// .then(function(rs){
//     console.log(rs);
//     var menu = document.getElementById("menu");
//     for(var item of rs){
//         var item_html = `<li class="item">
//                             <a href="#">${item}</a>
//                         </li>`;
//         menu.innerHTML += item_html;
//     }
// })

// var url = `https://dummyjson.com/products`;
// fetch(url).then(function(rs){
//     return rs.json();
// })
// .then(function(rs){
//     var products = rs.products;
//     var list = document.getElementById("list-products");
//     for(var p of products){
//         var p_html = `<div class="col-3 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <img src="${p.thumbnail}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">${p.title}</h5>
//                           <h6 class="card-title">${p.price}</h6>
//                           <p class="card-text">${p.description}</p>
//                           <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                       </div>
//                 </div>`;
//         list.innerHTML += p_html;
//     }    
// })

// function searchProduct(e) {
//     if(event.key === "Enter" || e.id === "product-limit" || e.id === "product-sort"){
//         var keyword = e.value;
//         var limit = document.getElementById("product-limit").value; 
//         var sort = document.getElementById("product-sort").value; 
//         var url_search = `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&sortBy=price&order=${sort}`;
//         fetch(url_search)
//         .then(function(rs) {
//             return rs.json();
//         })
//         .then(function(rs) {
//             var products = rs.products;
//             var list = document.getElementById("list-products");
//             list.innerHTML = "";

//             for (var p of products) {
//                 var p_html = `<div class="col-3 mb-3">
//                                 <div class="card" style="width: 18rem;">
//                                     <img src="${p.thumbnail}" class="card-img-top" alt="...">
//                                         <div class="card-body">
//                                             <h5 class="card-title">${p.title}</h5>
//                                             <h6 class="card-title">${p.price}</h6>
//                                             <p class="card-text">${p.description}</p>
//                                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                                         </div>
//                                     </div>
//                                 </div>`;
//                 list.innerHTML += p_html;
//             }
//         });
//     }
// }

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';

async function getWeatherForecast() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherContainer = document.getElementById('weather');
        data.list.forEach(item => {
            const dateTime = new Date(item.dt * 1000);
            const temperature = Math.round(item.main.temp);
            const weatherIcon = item.weather[0].icon;
            const weatherDescription = item.weather[0].description;

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('weather-card');
            forecastItem.innerHTML = `
                <p class="date-time">${dateTime.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                <p class="temperature">${temperature}°C</p>
                <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather icon" class="weather-icon">
                <p class="weather-description">${weatherDescription}</p>
            `;

            weatherContainer.appendChild(forecastItem);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeatherForecast();