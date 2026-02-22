// open & close Cart

var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}
// open & close menu

var menu = document.querySelector('#menu');

function open_menu() {
    menu.classList.add("active")
}
function close_menu() {
    menu.classList.remove("active")
}
// change item image
let bigImg = document.querySelector("#big_img")

function changeItemImg(img) {
    bigImg.src = img
}


/* add items in card */
var all_products_json

var items_in_cart = document.querySelector(".items-in-cart")  //  العنصر اللي هيتم عرض المنتجات المضافة جواه
let product_cart = []  // مصفوفة هتحتوي على المنتجات اللي المستخدم أضافها للسلة

function addToCart(id, btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")  // عشان ابين للمستخدم انه ميقدرش يضيف المنتج مرتين

    console.log(product_cart)
    getCartItems()  // علشان تحدث شكل السلة
}

let count_item = document.querySelector(".count-item")
let count_item_cart = document.querySelector(".count-item-cart")
let price_cart_total = document.querySelector(".price-cart-total")
let price_cart_head = document.querySelector(".price-cart-head")

function getCartItems() {  // وظيفتها إنها تحدث محتوى السلة (العناصر، العدد، السعر)
    let total_price = 0

    let items_c = ""  // متغير لتجميع الـ HTML اللي هيتعرض في صفحة السلة
    for (let i = 0; i < product_cart.length; i++) {  // product_cart حلقة بتلف على كل المنتجات اللي موجودة حاليًا في
        items_c += `
        <div class="item-cart">
                <img src="${product_cart[i].img}" alt="product">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price-cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
        total_price += product_cart[i].price  // بيزود سعر المنتج الحالي على السعر الكلي
    }
    items_in_cart.innerHTML = items_c

    price_cart_head.innerHTML = "$" + total_price  // بيعرض السعر الكلي في أعلى السلة
    count_item_cart.innerHTML = `(${product_cart.length} item in cart)`  // بيعرض عدد المنتجات في السلة
    price_cart_total.innerHTML = "$" + total_price  // بيعرض السعر الكلي في أسفل السلة
    count_item.innerHTML = product_cart.length
}

function remove_from_cart(index) {  //  product_cart دي دالة وظيفتها حذف منتج معين من السلة حسب ترتيبه في مصفوفه 
    product_cart.splice(index, 1)
    getCartItems()  // 

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus")  // بيجيب كل ايقونات السله علشان يحدث حالتها (نشيطة أو لا)

    addToCartButtons.forEach(btn => {  // إزالة التفعيل من الكل
        btn.classList.remove("active")
    })

    product_cart.forEach(product => {  //  تفعيل الازرار اللي منتجاتها لسه موجودة في السلة
        addToCartButtons.forEach(btn => {
            if (parseInt(btn.dataset.id) === product.id) {  //  عشان نحول القيمه من نص الي رقم parseInt استخدمنا 
                btn.classList.add("active")
            }
        })
    })
}

/* back to top */
let back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})