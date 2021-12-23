import gerenciaModal from "./modal.js"
const modal = gerenciaModal()
const $modalTitle = document.querySelector(".modal h2")
const $modalDescription = document.querySelector(".modal p")
const $modalButton = document.querySelector(".modal button")

const $checkButtons = document.querySelectorAll("div.actions a.check")

$checkButtons.forEach(button => {
    button.addEventListener("click", handleClick) 

})

const $deleteButton = document.querySelectorAll("div.actions a.delete")

$deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))

})

function handleClick(event, check = true) {
    const text = check ? "Marcar como lida ?" : "Excluir "

    $modalTitle.innerHTML = `${text} esta pergunta ?`
    $modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    $modalButton.innerHTML = `sim, ${text.toLowerCase()}`

    check ? $modalButton.classList.remove("red") : $modalButton.classList.add("red")

    modal.open()
}

