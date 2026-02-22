
///////////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector("#row")
let products = [
    {
        id: 1,
        title: "Adidas",
        price: "80$",
        category: "fashion",
        imageUrl: "img/product-1.jpg"
    },
    {
        id: 2,
        title: "Jacket",
        price: "70$",
        category: "fashion",
        imageUrl: "img/product-2.jpg"
    },
    {
        id: 3,
        title: "Headphones",
        price: "60$",
        category: "fashion",
        imageUrl: "img/product-3.jpg"
    },
    {
        id: 4,
        title: "Shoes",
        price: "80$",
        category: "fashion",
        imageUrl: "img/product-4.jpg"
    },
    {
        id: 5,
        title: "Backpack",
        price: "90$",
        category: "fashion",
        imageUrl: "img/product-5.jpg"
    },
    {
        id: 6,
        title: "T-Shirt",
        price: "50$",
        category: "fashion",
        imageUrl: "img/product-6.jpg"
    },
    {
        id: 7,
        title: "Cap",
        price: "75$",
        category: "fashion",
        imageUrl: "img/product-7.jpg"
    },
    {
        id: 8,
        title: "Glasses",
        price: "85$",
        category: "fashion",
        imageUrl: "img/product-8.jpg"
    },
    {
        id: 9,
        title: "Adidas",
        price: "55$",
        category: "fashion",
        imageUrl: "img/product-1.jpg"
    },
]

function drawItems() {
    let y = products.map((item) => {
        return `
        <div class="col-md-3"> 
            <div class="card">
                <img src="${item.imageUrl}" class="card-img-top ps-3 pe-3" alt="...">
                <div class="card-body ps-4">
                    <h5>Product : ${item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <h5>Category : ${item.category}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="btn btn-primary add_button" onClick="addToCart(${item.id})">Add to cart</a>
                        <i class="fa-solid fa-heart fs-4 me-3"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    console.log(y);
    allProducts.innerHTML += y
}
drawItems()

let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge_count")

let addedItem = []
/*let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []

if (addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `
    <div class=" p-2 pb-0 mb-1 rounded-2 bg-body">
    <p class="d-flex justify-content-between">${item.title}${count} <span class="text-green ms-3 plus">+</span> <span class="text-danger minus">-</span></p>
    </div>`
    })
    badge.innerHTML = addedItem.length
}*/



if (localStorage.getItem("firstName")) {
    function addToCart(id) {
        let choosenItem = products.find((item) => item.id === id)
        cartProductDiv.innerHTML += `
    <div class=" p-2 pb-0 mb-1 rounded-2 bg-body">
    <p class="d-flex justify-content-between">${choosenItem.title}${1} <span class="text-green ms-3 plus">+</span> <span class="text-danger minus">-</span></p>
    </div>`
        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        let cartProductsLength = document.querySelectorAll(".carts_products div")
        badge.innerHTML = cartProductsLength.length - 1
        let addButton = document.querySelectorAll("add_button")
        addButton.innerHTML += "Remove from button"
    }
}
else {
    window.location = "register.html"
}
/////////////////////////////////////////////////////////////////////////////
let shoppingCart = document.querySelector(".cart")
let cartsProducts = document.querySelector(".carts_products")

shoppingCart.addEventListener("click", openCart)

function openCart() {
    if (cartProductDiv.innerHTML != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        }
        else {
            cartsProducts.style.display = "block"
        }
    }
}