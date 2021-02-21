let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);
/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */
function performCalculation(){
    let result
    if( !firstNumber || !secondNumber) return
    if (operation === 'plus') result = Number(secondNumber) + Number(firstNumber) ; 
    if (operation === 'minus') result =  Number(secondNumber) - Number(firstNumber) ;
    if (operation === 'multiply') result =   Number(secondNumber) *  Number(firstNumber);
    if (operation === 'divide') result =  Number(secondNumber) / Number(firstNumber)  ;
    document.getElementById('input').innerText = result
    secondNumber = ''+ result
    firstNumber=''
    operation = ''
}



document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function(){ 
        updateSelectedOperation(this);
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
        updateSelectedNumber(this);
        updateDisplay();
    });
})

function updateDisplay() {
    document.getElementById('input').innerText = `${firstNumber}`;
}

function updateSelectedNumber(text) {
    if (text.innerText === '.' && firstNumber.indexOf('.') > -1){
        return;
    }
    firstNumber += text.innerText;
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
function updateSelectedOperation(text){

     console.log('#', text.innerText)
    switch(text.innerText){
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

