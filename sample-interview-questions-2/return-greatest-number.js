// Write a function that takes an array of numbers and returns the greatest number in the array.
function findGreatestNumber (myNumbers) {

    // Set our initial number.
    let greatestNumber = Number.NEGATIVE_INFINITY;

    // Iterate over our array.
    myNumbers.forEach(number => {

        // Compare our current number against the greatest number so far.
        if (number > greatestNumber) {
            greatestNumber = number;
        }
    });

    // Return our greatest number
    return greatestNumber;
}

console.log(findGreatestNumber([2, 40, -3]));
// Result: 40

console.log(findGreatestNumber([-3, -10, -1]));
// Result -1