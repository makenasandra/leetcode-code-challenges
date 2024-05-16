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
function zero(op) {
    let result;
    const num = 0;
    
    if(!op) return num;
    switch (op["operator"]){
        case "*": return num*op["multiplier"] 
        break;
        case "-": return num-op["multiplier"] 
        break;
        case "+": return num+op["multiplier"] 
        break;
        case "/": return num/op["multiplier"] 
        break;
    }
  }
  function one(op) {
     const num = 1;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function two(op) {
     const num = 2;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function three(op) {
     const num = 3;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function four(op) {
    const num = 4;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function five(op) {
    const num = 5;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : "";
  }
  function six(op) {
     const num = 6;
    if(!op) return num;
    console.log(op["operator"]==="*");
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function seven(op) {
    if(!op) return 7;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? 7*op["multiplier"]
    : op["operator"]==="-"? 7-op["multiplier"]
    : op["operator"]==="+"? 7+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(7/op["multiplier"])
    : ""
  }
  function eight(op) {
     const num = 8;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  function nine(op) {
     const num = 9;
    if(!op) return num;
    console.log(op["operator"]==="*")
    return op["operator"]==="*"? num*op["multiplier"]
    : op["operator"]==="-"? num-op["multiplier"]
    : op["operator"]==="+"? num+op["multiplier"]
    : op["operator"]==="/"? Math.trunc(num/op["multiplier"])
    : ""
  }
  
  function plus(num) {
     let op = {operator: "+", multiplier: num }
    return op;
  }
  function minus(num) {
    let op = {operator: "-", multiplier: num }
    return op;
  }
  function times(num) {
     let op = {operator: "*", multiplier: num }
    return op;
  }
  function dividedBy(num) {
     let op = {operator: "/", multiplier: num }
    return op;
  }
