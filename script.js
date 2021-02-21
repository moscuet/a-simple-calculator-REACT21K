let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);
/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */
function performCalculation(){
    console.log('before: ','f',firstNumber,'s',secondNumber, 'o',operation)
    let result
    if( !firstNumber || !secondNumber || !operation) return
    if (operation === 'plus') result = Number(secondNumber) + Number(firstNumber) ; 
    if (operation === 'minus') result =  Number(secondNumber) - Number(firstNumber) ;
    if (operation === 'multiply') result =   Number(secondNumber) *  Number(firstNumber);
    if (operation === 'divide') result =  Number(secondNumber) / Number(firstNumber)  ;
    document.getElementById('input').innerText = result
    secondNumber = ''+ result
    firstNumber=''
    operation = ''
    console.log('after: ','f',firstNumber,'s',secondNumber, 'o',operation)

}



document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function(){
        updateSelectedOperation()
        if (firstNumber) secondNumber = firstNumber
        firstNumber = ''
    })
})

document.querySelectorAll('.numbers > div').forEach(button => {
    button.addEventListener('click', function(){
        if(this.innerText === 'C'){
            reSet()
            updateDisplay();
            return
          }
        updateSelectedNumber();
        updateDisplay();
    });
})

function updateDisplay() {
    document.getElementById('input').innerText = `${firstNumber}`;
}

function updateSelectedNumber(text) {
    if (this.event.target.innerText === '.' && firstNumber.indexOf('.') > -1){
        return;
    }
    firstNumber += this.event.target.innerText;
}

function reSet (){
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

/**
 * update the variable operation with the user choice
 * @return {void}
 */
function updateSelectedOperation(){
    switch(this.event.target.innerText){
        case '+':
            operation = 'plus';
            break;
        case '-':
            operation = 'minus';
            break;
        case '×' :
            operation = 'multiply';
            break;
        case '÷':
            operation = 'divide';
            break;   
        default:
            console.log('Oops?');
            break;
    }

}

