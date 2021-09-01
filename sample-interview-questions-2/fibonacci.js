// Write a function that computes the first 100 numbers in the Fibonacci sequence.
function fibonacciHundred () {

    // Declare our array and some helper values.
    let fibonacciArray = [0, 1];
    let previousNumber = 0;
    let thisNumber = 1;

    // Loop over our array until we get 100 values.
    for (i=3; i<=100; i++) {

        // Calculate our next value in the sequence and add it to our array.
        let nextNumber = previousNumber + thisNumber;
        fibonacciArray.push(nextNumber);

        // Set our numbers to the last known numbers.
        previousNumber = thisNumber;
        thisNumber = nextNumber;
    }

    // Return our Fibonacci sequence.
    return fibonacciArray;
}

console.log(fibonacciHundred());