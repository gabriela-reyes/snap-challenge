// In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both. Otherwise, output the number.

function fizzBuzzBaz(number1, number2){
    const smallerNumber = number1 < number2 ? number1 : number2
    const largerNumber = number1 < number2 ? number2 : number1

    for(let counter = smallerNumber; counter <= largerNumber; counter++){
            //is counter evenly divisible by 6?
        if(!(counter%6)) {
            console.log('baz')
            //is counter evenly divisible by 3?
        }else if(counter%3 === 0) {
            console.log('buzz')
            //is counter evenly divisible by 2?
        }else if(!(counter%2)) {
            console.log('fizz')
            //if none of the above, output count
        }else{
            console.log(counter)
        }
    }
}

fizzBuzzBaz(3, 27)