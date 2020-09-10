class Calculator{
    constructor (firstParameterTextContent, secondParameterTextContent){
        this.firstParameterTextContent = firstParameterTextContent
        this.secondParameterTextContent = secondParameterTextContent;
        this.clear()
    }
    clear(){
        this.firstParameter = '';
        this.secondParameter = '';
        this.operation = undefined
    }
    delete(){
       this.firstParameter =  this.firstParameter.toString().slice(0,-1)
    }
    compute(){
        let finalValue;
        let elem1 = parseFloat(this.firstParameter)
        let elem2 = parseFloat(this.secondParameter)
        if(isNaN(elem1) || isNaN(elem2)){return}
        switch(this.operation){
            case '+':
            finalValue = elem1 + elem2
            break;
            case "-":
            finalValue = elem1 - elem2
            break;
            case '*':
            finalValue = elem1 * elem2
            break;
            case '/':
            finalValue = elem1/elem2
            break;
            default:
            return
        }
        this.firstParameter = finalValue;
        this.operation = undefined
        this.secondParameter = '' 

    }
    addNumber(number){
        if (number === '.' && this.firstParameter.includes('.')){return}
        this.firstParameter = this.firstParameter.toString() + number.toString()
        
    }
    addOperation(operation){
        if (this.firstParameter === ''){return}
            if (this.secondParameter !== ''){
                this.compute()
            }
        this.operation = operation
        this.secondParameter = `${this.firstParameter} ${this.operation}`;
        this.firstParameter = ''

    }
    updateDisplay(){
        this.firstParameterTextContent.textContent = this.firstParameter
        this.secondParameterTextContent.textContent = this.secondParameter;
    }
}

const numbers = document.querySelectorAll('.numbers')
const operations = document.querySelectorAll('.operand')
const equals = document.querySelector('.equals')
const deleteBtn = document.querySelector('.delete')
const clearAll = document.querySelector('.clear')
const firstParameterTextContent = document.querySelector('.lower-content')
const secondParameterTextContent = document.querySelector('.upper-calc')

//EventListeners
const calculator = new Calculator(firstParameterTextContent, secondParameterTextContent)
numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        calculator.addNumber(number.textContent)
        calculator.updateDisplay()
    })
})
operations.forEach((operation)=>{
    operation.addEventListener('click', ()=>{
        calculator.addOperation(operation.textContent);
        calculator.updateDisplay();
    })
})
equals.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})
clearAll.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteBtn.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})
