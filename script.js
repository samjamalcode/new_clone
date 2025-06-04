const add = function(a, b) {
    return a + b;
}

console.log(add(10,5));

const calculateNumbers = function(num1, num2) {
    console.log("Hello Co-worker");
    return num1 * num2;
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


const myOperation = function(a, b) {
    if (a >= 10 && b< 2) {
        console.log("a >= 10");
    } else {
        console.log("The end!");
    }

}

let newArray = [1, 2, 3, "sam"];

