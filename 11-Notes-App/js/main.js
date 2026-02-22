let notesContainer = document.querySelector(".notes-container")
let createNotesBtn = document.querySelector(".create-notes-btn")
let notes = document.querySelectorAll(".input-box")

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}

showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createNotesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    let span = document.createElement("SPAN")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images/delete.png"
    span.setAttribute("contenteditable", "false")
    notesContainer.appendChild(inputBox).appendChild(span).appendChild(img)
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove()
        updateStorage()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})