let canvas = document.getElementById('container')
canvas.style.gridTemplateColumns = "repeat(16, 1fr)"
canvas.style.gridTemplateRows = "repeat(16, 1fr)"

let clear = document.getElementById('clear')

let colorButton = document.getElementById('color')




let paintColor;
colorButton.addEventListener('click', () => {
    let content = colorButton.textContent;
    if (content == "BLACK") {
        colorButton.textContent = "RED"
        colorButton.style.backgroundColor = 'red'
        paintColor = "red"
    } else if (content == "RED") {
        colorButton.textContent = "BLACK"
        colorButton.style.backgroundColor = "BLACK"
        paintColor = "black"
    }
})

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.className = 'square'
    square.addEventListener('mouseover', () => {square.style.backgroundColor = paintColor})
    canvas.appendChild(square);
}

clear.addEventListener('click', () => {
    for (let i = 0; i < 256; i++) {
        let child = canvas.firstChild;
        canvas.removeChild(child)
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.className = 'square'
        square.addEventListener('mouseover', () => {square.style.backgroundColor = paintColor})
        canvas.appendChild(square);
    }    
})