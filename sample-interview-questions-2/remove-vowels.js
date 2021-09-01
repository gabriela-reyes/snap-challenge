//  Write a function that takes a string and returns it with all vowels (not including y) removed.
function removeVowels (myString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let filteredString = '';

    // Split our string into an array of characters and iterate over each character.
    let myArray = myString.split('');
    myArray.forEach(letter => {

        // Check if our character is in the vowels array.
        if (!vowels.includes(letter)){
            // If not, add it to our filtered string.
            filteredString = filteredString + letter;
        }
    });

    return filteredString;
}

console.log(removeVowels("hello world"));
// Result: hll wrld