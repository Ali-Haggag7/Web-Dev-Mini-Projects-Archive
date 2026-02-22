let firstName = document.querySelector(".first_name")
let lastName = document.querySelector(".last_name")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let registerBtn = document.querySelector(".sign_up")

registerBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (firstName.value === "" || email.value === "" || password.value === "") {
        alert("please fill the data")
    }
    else {
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("lastName", lastName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    }
})