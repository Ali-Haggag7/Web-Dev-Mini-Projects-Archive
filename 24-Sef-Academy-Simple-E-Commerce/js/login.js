let email = document.querySelector(".email")
let password = document.querySelector(".password")
let loginBtn = document.querySelector(".sign_in")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

console.log(getEmail);
console.log(getPassword);

loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (email.value === "" || password.value === "") {
        alert("please fill the data")
    }
    else {
        if (getEmail === email.value && getPassword === password.value) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500)
        }
        else {
            if (getEmail !== email.value) {
                alert("wrong email")
            }
            else if (getPassword !== password.value) {
                alert("wrong password")
            }
        }
    }
})
