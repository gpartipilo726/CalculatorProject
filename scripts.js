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
const decimal = document.querySelector("#calc-input.")
const add = document.querySelector("#calc-add");
const subtract = document.querySelector("#calc-subtract");
const multiply = document.querySelector("#calc-multiply");
const divide = document.querySelector("#calc-divide");
const equals = document.querySelector("#calc-equals");

const input = document.querySelector("#input");
const prevInput = document.querySelector("#prev-input");
let values = []
let operator = '';

one.addEventListener("click",() =>{
    input.textContent = 1;
    prevInput.textContent += 1;
    values.push('1');

});

two.addEventListener("click",() =>{
    input.textContent = 2;
    prevInput.textContent += 2;
    values.push('2');
    

});

three.addEventListener("click",() =>{
    input.textContent = 3;
    prevInput.textContent += 3;
    values.push('3');

});

four.addEventListener("click",() =>{
    input.textContent = 4;
    prevInput.textContent += 4;
    values.push('4');

});

five.addEventListener("click",() =>{
    input.textContent = 5;
    prevInput.textContent += 5;
    values.push('5');

});

six.addEventListener("click",() =>{
    input.textContent = 6;
    prevInput.textContent += 6;
    values.push('6');

});

seven.addEventListener("click",() =>{
    input.textContent = 7;
    prevInput.textContent += 7;
    values.push('7');

});

eight.addEventListener("click",() =>{
    input.textContent = 8;
    prevInput.textContent += 8;
    values.push('8');

});

nine.addEventListener("click",() =>{
    input.textContent = 9;
    prevInput.textContent += 9;
    values.push('9');

});

zero.addEventListener("click",() =>{
    input.textContent = 0;
    prevInput.textContent += 0;
    values.push('0');

});

decimal.addEventListener("click",() =>{
    prevInput.textContent += '.';
    values.push('.');
});

add.addEventListener("click",() =>{
    prevInput.textContent += '+';
    values.push('+');

});

subtract.addEventListener("click",() =>{
    prevInput.textContent += '-';
    values.push('-');

});

multiply.addEventListener("click",() =>{
    prevInput.textContent += 'x';
    values.push('*');
});

divide.addEventListener("click",() =>{
    prevInput.textContent += '÷';
    values.push('/');
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
    return num1/num2;
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
        case 'x':
            results = multiplyNum(num1, num2);
            break;
        case '÷':
            results = divideNum(num1, num2);
            break;
    }
    return results;

}

function findOperator(array){

    return array.filter(operator => operator === '+' || operator === '-' || operator === 'x' || operator === '÷').toString();
}

equals.addEventListener("click",()=>{
    prevInput.textContent += '=';
    console.log(values);
    let operator = findOperator(values);
    let OperatorIndex = values.indexOf(operator);
    let num1 = parseFloat(values.slice(0, OperatorIndex).join(''));
    let num2 = parseFloat(values.slice(OperatorIndex+1, values.length).join(''));
    console.log(num1);
    console.log(typeof(num1));
    console.log(num2);
    console.log(typeof(num2));
});




