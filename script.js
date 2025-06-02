const add = function(a, b) {
    return a + b;
}

console.log(add(10,5));

const calculateNumbers = function(num1, num2) {
    return num1 + num2;
}

console.log(calculateNumbers(10, 300));

let newSet = new Set([1, 2, 3]);
let myArray = [];

for (let value of newSet){
    myArray.push(value);
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

const minusFunction = function(a, b) {
    return a -b;
}
console.log(minusFunction(200, 1000));