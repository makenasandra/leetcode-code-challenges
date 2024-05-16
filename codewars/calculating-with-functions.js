/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 */

//My Solution
function calculate(num, op) {
  if (!op) return num;
  switch (op["operator"]) {
    case "*":
      return num * op["operand"];
      break;
    case "-":
      return num - op["operand"];
      break;
    case "+":
      return num + op["operand"];
      break;
    case "/":
      return Math.trunc(num / op["operand"]);
      break;
  }
}
function zero(op) {
  return calculate(0, op);
}

function one(op) {
  return calculate(1, op);
}
function two(op) {
  return calculate(2, op);
}
function three(op) {
  return calculate(3, op);
}
function four(op) {
  return calculate(4, op);
}
function five(op) {
  return calculate(5, op);
}
function six(op) {
  return calculate(6, op);
}
function seven(op) {
  return calculate(7, op);
}
function eight(op) {
  return calculate(8, op);
}
function nine(op) {
  return calculate(9, op);
}

const operation = (operator, operand) => {
  return { operator, operand };
};

function plus(num) {
  return operation("+", num);
}
function minus(num) {
  return operation("-", num);
}
function times(num) {
  return operation("*", num);
}
function dividedBy(num) {
  return operation("/", num);
}

//Best SOlution
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b
