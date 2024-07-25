const one = document.querySelector("#calc-input1");
const two = document.querySelector("#calc-input2");
const three = document.querySelector("#calc-input3");
const four = document.querySelector("#calc-input4");
const five = document.querySelector("#calc-input5");
const six = document.querySelector("#calc-input6");
const seven = document.querySelector("#calc-input7");
const eight = document.querySelector("#calc-input8");
const nine = document.querySelector("#calc-input9");
const zero = document.querySelector("#calc-input0");
const decimal = document.querySelector("#calc-decimal");
const add = document.querySelector("#calc-add");
const subtract = document.querySelector("#calc-subtract");
const multiply = document.querySelector("#calc-multiply");
const divide = document.querySelector("#calc-divide");
const negative = document.querySelector("#calc-negative");
const power = document.querySelector("#calc-power");
const equals = document.querySelector("#calc-equals");
const clear = document.querySelector("#calc-clear");
const allClear = document.querySelector("#calc-clearall");

const input = document.querySelector("#input");
const prevInput = document.querySelector("#prev-input");
let values = []
let PreviousResult;
let operator = '';
let reset = false;


one.addEventListener("click",(e) =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent = 1;
    prevInput.textContent += 1;
    values.push('1');
    console.log(values);

});

two.addEventListener("click",() =>{
    console.log(reset);
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();
    
    input.textContent += 2;
    prevInput.textContent += 2;
    values.push('2');
    

});

three.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();
    
    input.textContent += 3;
    prevInput.textContent += 3;
    values.push('3');

});

four.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 4;
    prevInput.textContent += 4;
    values.push('4');

});

five.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 5;
    prevInput.textContent += 5;
    values.push('5');

});

six.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 6;
    prevInput.textContent += 6;
    values.push('6');

});

seven.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 7;
    prevInput.textContent += 7;
    values.push('7');

});

eight.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 8;
    prevInput.textContent += 8;
    values.push('8');

});

nine.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 9;
    prevInput.textContent += 9;
    values.push('9');

});

zero.addEventListener("click",() =>{
    if(reset){
        prevInput.textContent = '';
        input.textContent = '';
        reset = false;
    }
    removeDisabled();

    input.textContent += 0;
    prevInput.textContent += 0;
    values.push('0');

});

decimal.addEventListener("click",() =>{
    
    prevInput.textContent += '.';
    input.textContent += '.';

    values.push('.');

    if(values[values.length-1] === "."){
        decimal.setAttribute('disabled','true');
    } 
});

add.addEventListener("click",() =>{

    if(values.length < 1){
        reset = false;
        prevInput.textContent = '';
        prevInput.textContent += PreviousResult;
        input.textContent += '+';
        values.push(PreviousResult);
    }

    if(values[values.length-1] === '+'){
        alert("Invalid Input. Operator already exists.")
    } else{
        prevInput.textContent += '+';
        values.push('+');
        input.textContent = '';

    }

    

});

subtract.addEventListener("click",() =>{

    if(values.length < 1){
        reset = false;
        prevInput.textContent = '';
        prevInput.textContent += PreviousResult;
        input.textContent += '+';
        values.push(PreviousResult);
    }

    prevInput.textContent += '-';
    values.push('-');
    input.textContent = '';


});

multiply.addEventListener("click",() =>{

    if(values.length < 1){
        reset = false;
        prevInput.textContent = '';
        prevInput.textContent += PreviousResult;
        input.textContent += '+';
        values.push(PreviousResult);
    }

    prevInput.textContent += 'x';
    values.push('*');
    input.textContent = '';

});

divide.addEventListener("click",() =>{

    if(values.length < 1){
        reset = false;
        prevInput.textContent = '';
        prevInput.textContent += PreviousResult;
        input.textContent += '+';
        values.push(PreviousResult);
    }

    prevInput.textContent += '÷';
    values.push('/');
    input.textContent = '';

});


power.addEventListener("click", () =>{

    if(values.length < 1){
        reset = false;
        prevInput.textContent = '';
        prevInput.textContent += PreviousResult;
        input.textContent += '+';
        values.push(PreviousResult);
    }

    prevInput.textContent += '^';
    values.push('**');
    input.textContent = '';
});


negative.addEventListener("click", () => {

});




clear.addEventListener("click", ()=>{
    values.pop();
    input.textContent = input.textContent.slice(0,input.textContent.length-1);
    prevInput.textContent = prevInput.textContent.slice(0,prevInput.textContent.length-1);

});


allClear.addEventListener("click", ()=>{
    values = []
    input.textContent = '';
    prevInput.textContent = '';

});



function addNum (num1, num2){
    return num1+num2;
}

function subtractNum (num1, num2){
    return num1-num2;
}

function multiplyNum (num1, num2){
    return num1*num2;
}

function divideNum (num1, num2){
    return Mathnum1/num2;
}

function powerNum (num1, num2){
    return num1**num2;
}

function removeDisabled(){
    decimal.removeAttribute('disabled','false');
    subtract.removeAttribute('disabled','false');
    add.removeAttribute('disabled','false');
    multiply.removeAttribute('disabled','false');
    divide.removeAttribute('disabled','false');
    equals.removeAttribute('disabled','false');

}

function Operate (num1, num2, operator){
    let results = 0;
    switch (operator){
        case '+':
            results = addNum(num1, num2);
            break;
        case '-':
            results = subtractNum(num1, num2);
            break;
        case '*':
            results = multiplyNum(num1, num2);
            break;
        case '/':
            results = divideNum(num1, num2);
            break;
        case '**':
            results = powerNum(num1, num2);
            break;
    }
    return results;

}

function findOperator(array){

    return array.filter(operator => operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '**').toString();
}

equals.addEventListener("click",()=>{
    prevInput.textContent += '=';
    let operator = findOperator(values);
    let OperatorIndex = values.indexOf(operator);
    let num1 = parseFloat(values.slice(0, OperatorIndex).join(''));
    let num2 = parseFloat(values.slice(OperatorIndex+1, values.length).join(''));

    result = Operate(num1, num2, operator);
    input.textContent = result;
    PreviousResult = result;
    values = [];
    reset = true;


});




