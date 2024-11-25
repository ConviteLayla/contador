let base = 0

window.addEventListener("load", () => {
    document.getElementById("number").innerText = base
});

function counter() {
    base += 1

    if (base < 0) {
        document.getElementById("number").style.color = "#aa0000"
    }
    else {
        document.getElementById("number").style.color = "#00aa00"

    }    
    document.getElementById("number").innerText = base
    console.log(base)
}

function reset() {
    base = 0
    document.getElementById("number").innerText = base
}

function remove() {
    base -= 1
    if (base < 0) {
        document.getElementById("number").style.color = "#aa0000"
    }
    else {
        document.getElementById("number").style.color = "#00aa00"

    }   
    document.getElementById("number").innerText = base
}