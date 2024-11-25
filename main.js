let counter = 0;

const value = document.querySelector(".value")
const btn = document.querySelectorAll(".btn")

btn.forEach((itens) => {
    itens.addEventListener("click", (event) => {
        const classValue = event.target.classList;
        if(classValue.contains("decrescer")) {
            counter--
            value.textContent = counter
        }
        else if (classValue.contains("acrescentar")) {
            counter++
            value.textContent = counter
        }
        else    {
            counter = 0
            value.textContent = counter
        }
        if (counter < 0) {
            value.style.color = "#aa0000"
        }
        else if (counter > 0) {
            value.style.color = "#00aa00"
        }
        else {
            value.style.color = "#000000"
        }
    })
})