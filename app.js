const buttonsContent = ['', '', '', '', '', '', '', '', ''];
const buttons = document.querySelectorAll('button');
let currentPlayer = 'X';

const isEmpty = (index) => buttonsContent[index] === '';

const changePlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    }
    else {
        currentPlayer = 'X';
    }
}

const isWin = () => {
    if (buttonsContent[0] === buttonsContent[1] && buttonsContent[1] === buttonsContent[2] && buttonsContent[0] === buttonsContent[2]) {
        if (buttonsContent[0] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[3] === buttonsContent[4] && buttonsContent[4] === buttonsContent[5] && buttonsContent[3] === buttonsContent[5]) {
        if (buttonsContent[3] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[6] === buttonsContent[7] && buttonsContent[7] === buttonsContent[8] && buttonsContent[6] === buttonsContent[8]) {
        if (buttonsContent[6] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[0] === buttonsContent[4] && buttonsContent[4] === buttonsContent[8] && buttonsContent[0] === buttonsContent[8]) {
        if (buttonsContent[0] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[2] === buttonsContent[4] && buttonsContent[4] === buttonsContent[6] && buttonsContent[2] === buttonsContent[6]) {
        if (buttonsContent[2] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[0] === buttonsContent[3] && buttonsContent[3] === buttonsContent[6] && buttonsContent[0] === buttonsContent[6]) {
        if (buttonsContent[0] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[1] === buttonsContent[4] && buttonsContent[4] === buttonsContent[7] && buttonsContent[1] === buttonsContent[7]) {
        if (buttonsContent[0] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (buttonsContent[2] === buttonsContent[5] && buttonsContent[5] === buttonsContent[8] && buttonsContent[2] === buttonsContent[8]) {
        if (buttonsContent[0] !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

for (const button of buttons) {
    button.addEventListener('click', () => {
        if (isEmpty(button.id)) {
            button.innerText = currentPlayer;
            buttonsContent[button.id] = currentPlayer;
            if (isWin()) {
                alert(`Player ${currentPlayer} has won!!!!`);
                buttons.forEach((btn) => btn.disabled = true);
            }
            else {
                if (!buttonsContent.some((button) => button === '')) {
                    alert('Tie!');
                    buttons.forEach((btn) => btn.disabled = true);
                }
            }
            changePlayer();
        }
    }, { once: true });
}