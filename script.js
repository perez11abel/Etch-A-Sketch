let color = 'black';
let click = true;

const populateBoard = (size) => {
let board = document.querySelector(".board");
let squares = board.querySelectorAll('div');
squares.forEach(div => div.remove());
//create 16 columns, each with a width of 1/16 of the widht of the container.
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size
for(let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(32);

const changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }
}

function colorSquare() {
    //this refers to whatever div/square we added an event listener to.
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }   else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

const resetBoard = () => {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {    
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = `Mode: Coloring`;
        } else {
            document.querySelector('.mode').textContent = `Mode: Not Coloring`
        }
    }
})