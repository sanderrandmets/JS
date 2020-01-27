const btns = Array.prototype.slice.call(document.querySelectorAll('.btn'))
const answer = document.querySelector('#answer');
let currentNumber = '';
let firstNumber;

btns.map(btn => btn.addEventListener('click', (evt) => {
    console.log(parseInt(evt.target.innerText))
    if (! isNAN(parseInt(evt.target.innerText)) >= 0) {
        saveCurrentNumber(evt.target.innerText);
    }
    if () {
        activateOperator(evt.target.innerText)
    }
}));

function saveCurrentNumber(number){
    currentNumber += number
    updatedisplay();
}

function updatedisplay(){
    answer.innerText = currentNumber
}

function activateOperator(evt){
    evt.target.innerText
}
    
/*answer.innerText=evt.target.innerText*/