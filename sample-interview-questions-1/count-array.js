// In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

const myArray = [3, 7, 2, 3, 3, 3, 1, 1, 7, 3]

function countMatchingArrayElements (arrayOfNumbers){
    let anotherArray = []
    arrayOfNumbers.forEach(element=>{
        anotherArray[element] = anotherArray[element] ? anotherArray[element] + 1 : 1
    })
    return anotherArray
}

console.log(countMatchingArrayElements(myArray))
