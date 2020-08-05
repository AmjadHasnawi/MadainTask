let arr = ['', '', '', '', '', '', '', '', '']
let X = 'X';
let O = 'O';

function myTurn(ele, num) {
    if (!ele.innerHTML) {
        ele.innerHTML = X;
        arr[num] = X;  
    } else {
        alert('Please choose another spot');
        return;
    }
    setTimeout(() => {
        if (checkForWin()) {
            return;
        };
        computersTurn();
    }, 100);  
}

function computersTurn() {
    for (let i = 0; i < 9; i++) {
        let num = Math.floor(Math.random() * 9)
        let choice = 'td' + num;
        let chosen =  document.getElementById(choice);
        if(!chosen.innerHTML) {
            document.getElementById(choice).innerHTML = O;
            arr[num] = O;
            setTimeout(() => {
                checkForWin();
            }, 100);
            break;
        }
    }   
};

function checkForWin() {
    if ((arr[0] === arr[1]) && (arr[1] === arr[2])) {
       return whoWin(0);
    } else if ((arr[0] === arr[3]) && (arr[3] === arr[6])) {
        return whoWin(0);
    } else if ((arr[0] === arr[4]) && (arr[4] === arr[8])) {
        return whoWin(0);
    } else if ((arr[3] === arr[4]) && (arr[4] === arr[5])) {
        return whoWin(3);
    } else if ((arr[6] === arr[7]) && (arr[7] === arr[8])) {
        return whoWin(6);
    } else if ((arr[1] === arr[4]) && (arr[4] === arr[7])) {
        return whoWin(1);
    } else if ((arr[2] === arr[5]) && (arr[5] === arr[8])) {
        return whoWin(2);
    } else if ((arr[2] === arr[4]) && (arr[4] === arr[6])) {
        return whoWin(2);
    }    
}

function whoWin(num) {
    if (arr[num] === X) {
        alert('You Win');
        window.location.reload();
        return true;
    } else if (arr[num] === O) {
        alert('Computer Win');
        window.location.reload();
        return true;
    }
}