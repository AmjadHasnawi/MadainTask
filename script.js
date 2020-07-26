    var arr = [{value: ''},{value: ''},{value: ''},{value: ''},{value: ''},{value: ''},{value: ''},{value: ''},{value: ''}]
    
    function myTurn(ele, num) {
        if (ele && !ele.innerHTML) {
            ele.innerHTML = "X";
            arr[num].value = "X";
            
        }
        checkForWhen();
        computersTurn();
    }

    function computersTurn() {
        for (var i = 0; i < 9; i++) {
            var num = Math.floor(Math.random() * 10)
            var choice = 'div' + num;
             var chosen =  document.getElementById(choice);
            if(chosen && !chosen.innerHTML) {
                document.getElementById(choice).innerHTML = "Y";
                arr[num].value = "Y";
                checkForWhen();
                break;
            }
        }
        for (var i = 0; i < 9; i++) {
            console.log( i + ''+ arr[i].value);}
    };
 function checkForWhen() {
     console.log(arr[0].value , arr[1].value , arr[2].value);
     if ((arr[0].value === arr[1].value) && (arr[1].value === arr[2].value)) {
        if (arr[0].value === 'X') {
            alert('You Win');
        } else if (arr[0].value === 'Y') {
            alert('Computer Win');
        }
     }

    if ((arr[0].value === arr[3].value) && (arr[3].value === arr[6].value)) {
        if (arr[0].value === 'X') {
            alert('You Win');
        }  else if (arr[0].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[0].value === arr[4].value) && (arr[4].value === arr[8].value)) {
        if (arr[0].value === 'X') {
            alert('You Win');
        }  else if (arr[0].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[3].value === arr[4].value) && (arr[4].value === arr[5].value)) {
        if (arr[3].value === 'X') {
            alert('You Win');
        }  else if (arr[3].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[6].value === arr[7].value) && (arr[7].value === arr[8].value)) {
        if (arr[6].value === 'X') {
            alert('You Win');
        }  else if (arr[6].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[1].value === arr[4].value) && (arr[4].value === arr[7].value)) {
        if (arr[1].value === 'X') {
            alert('You Win');
        }  else if (arr[1].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[2].value === arr[5].value) && (arr[5].value === arr[8].value)) {
        if (arr[2].value === 'X') {
            alert('You Win');
        }  else if (arr[2].value === 'Y') {
            alert('Computer Win');
        }
    }

    if ((arr[2].value === arr[4].value) && (arr[4].value === arr[6].value)) {
        if (arr[2].value === 'X') {
            alert('You Win');
        }  else if (arr[2].value === 'Y') {
            alert('Computer Win');
        }
    }
    

     
 }