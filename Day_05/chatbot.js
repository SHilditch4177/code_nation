// learn to bouild context, and refine prompts and create a collaboratibe environment, and enable learner to see assistance with programming tasks
// (LLM) large language model is a computer program that has been fed enough example to be able to recognise and interpret human language or other types of complex data.

// function swapHeadAndTail(arr) {
//     // Get the length of the array
//     const len = arr.length;

//     // Determine the mid index, head and tail sizes
//     const mid = Math.floor(len / 2);
//     let head, tail, middle;

//     if (len % 2 === 0) {
//         // If the length is even
//         head = arr.slice(0, mid);
//         tail = arr.slice(mid);
//         middle = [];
//     } else {
//         // If the length is odd
//         head = arr.slice(0, mid);
//         tail = arr.slice(mid + 1);
//         middle = arr.slice(mid, mid + 1);
//     }

//     // Swap head and tail and concatenate with the middle part
//     const newArr = tail.concat(middle, head);

//     return newArr;
// }

// // Example usage
// const originalArray = [1, 2, 3, 4, 5, 6];
// const swappedArray = swapHeadAndTail(originalArray);
// console.log(swappedArray); // Output: [4, 5, 6, 1, 2, 3]

// function swapHeadAndTail(arr) {
//     if (arr.length <= 1) {
//         return arr; // If array has 0 or 1 element, no change needed
//     }

//     const mid = Math.floor(arr.length / 2);
//     const head = arr.slice(0, mid);
//     const tail = arr.slice(-mid);

//     return [...tail, ...arr.slice(mid, -mid), ...head];
// }

// // Example usage
// const originalArray = [1, 2, 3, 4, 5, 6];
// const swappedArray = swapHeadAndTail(originalArray);
// console.log(swappedArray); // Output: [4, 5, 6, 1, 2, 3]

// // Step 1: Define your array
// const specifiedArray = [1, 2, 3, 4, 5, 6];

// // Step 2: Function to transform the array
// function transformArray(arr) {
//     // Step 3: Check the length of the array
//     const len = arr.length;

//     // Step 4: Calculate the middle index
//     const mid = Math.floor(len / 2);

//     // Step 5: Extract the head, middle (if odd length), and tail of the array
//     const head = arr.slice(0, mid);
//     const middle = len % 2 === 0 ? [] : arr.slice(mid, mid + 1);
//     const tail = arr.slice(mid + (len % 2), len);

//     // Step 6: Concatenate tail, middle, and head to form the transformed array
//     const transformedArray = tail.concat(middle, head);

//     // Step 7: Return the transformed array
//     return transformedArray;
// }

// // Step 8: Transform the specified array and store the result
// const transformedArray = transformArray(specifiedArray);

// // Step 9: Output the original and transformed arrays
// console.log("Original Array:", specifiedArray);
// console.log("Transformed Array:", transformedArray);

function swapHeadAndTail(array) {
    if (array.length !== 5) {
        throw new Error("Array must have exactly 5 elements.");
    }
    
    // Swap head and tail
    let temp = array[0];
    array[0] = array[4];
    array[4] = temp;
    
    return array;
}

// Example usage:
let arr = [1, 2, 3, 4, 5]; // Example array with 5 elements
console.log("Original array:", arr);

try {
    let swappedArray = swapHeadAndTail(arr);
    console.log("Swapped array:", swappedArray);
} catch (error) {
    console.error(error.message);
}


