let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector("#row")

if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartProduct(item)
}

function drawCartProduct(products) {
    let y = products.map((item) => {
        return `
        <div class="col"> 
            <div class="card">
                <img src="${item.imageUrl}" class="card-img-top ps-3 pe-3" alt="...">
                <div class="card-body ps-4">
                    <h5>Product : ${item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <h5>Category : ${item.category}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="btn btn-primary add_button" onClick="removeFromCart(${item.id})">Remove from cart</a>
                        <i class="fa-solid fa-heart fs-4 me-3"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    console.log(y);
    
    allProducts.innerHTML = y
}