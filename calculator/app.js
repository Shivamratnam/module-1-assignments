const calculator = require('./calculator');
const add = require('./operations/add.js');
const sub = require('./operations/sub.js');
const mul = require('./operations/mul.js');
const div = require('./operations/div.js');
const moment = require('moment');

function phase1(){
    let num1 = 10;
    let num2 = 20;
    console.log(`The sum of ${num1} & ${num2} is ${calculator.sum(num1, num2)}`);
    console.log(`The multiplication of ${num1} & ${num2} is ${calculator.mult(num1, num2)}`);
}
function phase2(){
    let num1 = 10;
    let num2 = 5;
    console.log(`${num1}+${num2}=${add(num1, num2)}`);
    console.log(`${num1}-${num2}=${sub(num1, num2)}`);
    console.log(`${num1}*${num2}=${mul(num1, num2)}`);
    console.log(`${num1}/${num2}=${div(num1, num2)}`);
}
function phase3(){
    let num1 = 20;
    let num2 = 5;
    console.log(`Today is: ${moment().format('dddd, MMMM Do, YYYY hh:mm:ss a')}`);
    console.log(`The sum of ${num1} & ${num2} is: ${calculator.sum(num1, num2)}`);
    console.log(`The multiplication of ${num1} & ${num2} is: ${calculator.mult(num1, num2)}`);
}

(function main(){
    console.log('PHASE 1');
    phase1();
    console.log('\nPHASE 2');
    phase2();
    console.log('\nPHASE 3');
    phase3();
})();