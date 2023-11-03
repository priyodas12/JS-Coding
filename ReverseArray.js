let inputArray = [12, 9, 2, 6, 77, 192, 34, -8, -6, 0];

//inputArray.reverse();

console.log(inputArray);

function rvereseArray(arr, start, end) 
{ 
    console.log(`start: ${start}, end: ${end}`);
    var temp = arr[start]; 
    arr[start] = arr[end]; 
    arr[end] = temp; 
      
    // Recursive Function calling 
    if (start+1<end-1){ 
    rvereseArray(arr, start + 1, end - 1); 
    } 
} 

rvereseArray(inputArray, 0, inputArray.length - 1);

console.log(inputArray);