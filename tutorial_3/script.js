class Calculator {
    constructor(OperandTextElement) {
     
      this.OperandTextElement = OperandTextElement
      this.clear()
    }
  
    clear() {
      this.operand = ''
     
      this.operation = undefined
    }
  
    delete() {
      this.operand = this.operand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
        if (number === '.' && this.operand.includes('.')) return
       //only 1 "." in the the screen
        this.operand= this.operand.toString()+number.toString(0);
    }
  
    chooseOperation(operation) {
      if (this.operand === '') return
      this.operation = operation
      this.previousOperand = this.operand
      this.operand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.operand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.operand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    
  
    updateDisplay() {
      this.OperandTextElement.innerText = this.operand;
     
    }
  }
  
  
  const numberButtons = document.querySelectorAll('.number')
  const operationButtons = document.querySelectorAll('.operation')
  const equalsButton = document.querySelector('.calculator-grid_equal')
  const deleteButton = document.querySelector('.calculator-grid_delete')
  const allClearButton = document.querySelector('.calculator-grid_deleteAll')
  const OperandTextElement = document.querySelector('.operand')
  const calculator = new Calculator(OperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })