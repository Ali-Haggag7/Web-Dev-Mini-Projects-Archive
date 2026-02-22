let navbarToggler = document.querySelector(".navbar-toggler")
let userInfo = document.querySelector(".user_info")
let userData = document.querySelector("#user")
let links = document.querySelector(".links")

if (localStorage.getItem("firstName")) {
    navbarToggler.remove()
    links.remove()
    userInfo.style.display = "block"
    userData.innerHTML = "Welcome " + localStorage.getItem("firstName")
}
let logout = document.querySelector(".Logout")

logout.addEventListener("click", function () {
    localStorage.clear()
    setTimeout(() => {
        window.location = "login.html"
    }, 1500)
})