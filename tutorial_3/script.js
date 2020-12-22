class Calculator{
    constructor(outputText){
        this.outputText = outputText;
    }

    clear(){

    }

    delete(){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
       this.outputText.innerText= this.outputText;
    }
    appendNumber(number){
        this.outputText = number;

    }


} 



  
 const numberButtons = document.querySelectorAll('.number');
 const operationButtons = document.querySelectorAll('.operation');
 const allClearButton = document.querySelector('.calculator-grid_deleteAll');
 const clearButton = document.querySelector('.calculator-grid_delete');
 const equalButton = document.querySelector('.calculator-grid_equal');
 const outputTextElement = document.querySelector('.output');

 const calculator = new Calculator(outputText);

 numberButtons.forEach(button => {
     button.addEventListener('click',() => {
         calculator.appendNumber(button.innerText);
         calculator.updateDisplay();
        
     })
 })
 
 