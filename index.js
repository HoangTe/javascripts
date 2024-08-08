// setTimeout(function(){ // call back function

        // },1000);

        // URL -> chứa data cần dùng dạng JSON  -> Rest api (HTTP Service) 
        // có 2 cách: 1- sử dụng callback function   cách 2- sử dụng xử lý bất đồng bộ
        // step 1: call api --> get data
        var url = `https://dummyjson.com/products/category-list`;
        fetch(url).then(function(rs){
            return rs.json(); // chuyển dữ liệu nhận được thành dạng JSON
        })
        .then(function(rs){
            console.log(rs); // đã nhận được data là 1 array 24 string
        // step 2: using data --> render html
            var menu = document.getElementById("menu"); // list rendering
            for(var item of rs){
                var item_html = `<li class="item">
                                    <a href="#">${item}</a>
                                </li>`;
                menu.innerHTML += item_html;
            }
        })

        // Render products list
        var url2 = `https://dummyjson.com/products`;
        // step 1
        fetch(url2).then(function(rs){
            return rs.json();
        })
        .then(function(rs){
            var products = rs.products;
            var list = document.getElementById("list-products");
            for(var p of products){
                var p_html = `<div class="col-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${p.thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${p.title}</h5>
                          <p class="card-text">${p.description}</p>
                          <a href="#" onclick="addToCart(${p.id})" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                </div>`;
                list.innerHTML += p_html;
            }
        })

        function searchProduct(e){
            if(event.keyCode == 13){ // kiểm tra xem người dùng nhấn phím enter (13)
                var keyword = e.value;
                // var url_search = `https://dummyjson.com/products/search?q=${keyword}`;
                var limit = document.getElementById("select-limit").value;
                var sort = document.getElementById("select-sort").value;
                url_search = `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&sortBy=price&order=${sort}`;
                fetch(url_search).then(function(rs){
                    return rs.json();
                })
                .then(function(rs){
                    var products = rs.products;
                    var list = document.getElementById("list-products");
                    list.innerHTML = ``;// clear list
                    for(var p of products){
                        var p_html = `<div class="col-3 mb-3">
                            <div class="card" style="width: 18rem;">
                                <img src="${p.thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <p class="card-text">${p.description}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>`;
                        list.innerHTML += p_html;
                    }
                })
            }
            
            // xây dựng chức năng tìm kiếm sản phẩm
        }

        // product of category
     //   url = `https://dummyjson.com/products/category/beauty`;
        // sort and limit
        function filter(){
            var search = document.getElementById("input-search").value;
            var limit = document.getElementById("select-limit").value;
            var sort = document.getElementById("select-sort").value;
            url3 = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&sortBy=price&order=${sort}`;
            fetch(url3).then(function(rs){
                    return rs.json();
                })
                .then(function(rs){
                    var products = rs.products;
                    var list = document.getElementById("list-products");
                    list.innerHTML = ``;// clear list
                    for(var p of products){
                        var p_html = `<div class="col-3 mb-3">
                            <div class="card" style="width: 18rem;">
                                <img src="${p.thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <p class="card-text">${p.description}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>`;
                        list.innerHTML += p_html;
                    }
                })
        }
        
        async function addToCart(id){
            const url = `https://dummyjson.com/products/${id}`;
            var rs = await fetch(url);
            var data = await rs.json(); // lấy về dc 1 sản phẩm
            var product = {
                id: id,
                title: data.title,
                thumbnail: data.thumbnail,
                price: data.price,
                buyQty: 1
            }
            var cart = localStorage.getItem("cart"); // "[{id:...,title:...}]"
            if(cart == null){
                cart= [];
            }else{
                cart = JSON.parse(cart);
            }
            cart.push(product); // array
            // console.log(cart);
            cart = JSON.stringify(cart);// convert to string
            // console.log(cart);
            localStorage.setItem("cart",cart);
        }
        
      //  localStorage.setItem("demo","ABC123");
    //   var demo = localStorage.getItem("demo");
    //   console.log(demo);