let inputArray = [12, 9, 2, 6, 77, 192, 34, -8, -6, 0];
let min = 0;
let max = 0;
for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    if (element > max) { 
        max = element;
    }
    if (element < min) { 
        min = element;
    }
}
console.log(max, min);

console.log(Math.max(...inputArray));

console.log(Math.min(...inputArray));