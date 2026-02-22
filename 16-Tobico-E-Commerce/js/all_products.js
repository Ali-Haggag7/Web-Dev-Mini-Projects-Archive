// open & close filter

var filter = document.querySelector(".filter")

function openAndCloseFilter() {
    filter.classList.toggle("active")
}
////////////////////////////////////////////////////////
fetch('js/items.json')
    .then(response => response.json())
    .then(data => {

        const products_dev = document.getElementById("products_dev")


        all_products_json = data

        data.forEach(product => {
            const old_price_pargraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""

            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""

            products_dev.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i data-id="${product.id}" onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    ${percent_disc_div}
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
                        ${old_price_pargraph}
                    </div>
                </div>`
        });
    })