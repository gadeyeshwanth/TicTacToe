let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGame = document.querySelector('#newGame');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg1');
let msg2 = document.querySelector('#msg2');
let main = document.querySelector('main');
let drawContainer = document.querySelector('.draw-container');

let turnO = true;

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO === true){
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enaableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                main.classList.add('hide');
            }
        }
    }
}

const resetGame = () => {
    turn0 = true;
    enaableBoxes();
    msgContainer.classList.add('hide');
    main.classList.remove('hide');
}

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);