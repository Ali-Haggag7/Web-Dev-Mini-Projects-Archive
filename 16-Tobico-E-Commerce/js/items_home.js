fetch('js/items.json')
    .then(response => response.json())
    .then(data => {

        const swiper_items_sale = document.getElementById("swiper_items_sale")
        const other_product_swiper = document.getElementById("other-product-swiper")
        const other_product_swiper2 = document.getElementById("other-product-swiper2")


        all_products_json = data

        data.forEach(product => {     // بيعرض المنتجات اللي عليها خصم بس
            if (product.old_price) {
                const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
                swiper_items_sale.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i data-id="${product.id}" onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <span class="sale-present">%${percent_disc}</span>
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="product-name"><a href="item.html">${product.name}</a></h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old-price">$${product.old_price}</p>
                    </div>
                </div>`
            }
        });

        data.forEach(product => {
            const productHTML = `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i data-id="${product.id}" onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="product-name"><a href="#">${product.name}</a></h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                    </div>
                </div>`;
        
            other_product_swiper.innerHTML += productHTML;
            other_product_swiper2.innerHTML += productHTML;
        });
        
    })