// Using the foreach loop display this array of text to the DOM.
//
//     ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
//
// Hint: Each array element must appear in it's own html tag in the browser. Extra Credit: use map or reduce.
// Extra credit

const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

//Use this to see what is inside the DOM
//console.log(target)

// Use this function when you want to change text.
// let target = document.getElementById('target')
// target.innerText ='We changed the text.'
// console.log(target.innerText)

//This function will change the inner text AND give a list of array elements with the variable name: 'name'
// let target = document.getElementById('target')
// target.innerText ='We changed the text.'
// console.log(target.innerText)
// names.forEach(name=>console.log(name))

let target = document.getElementById('target')
names.forEach(name=>target.innerHTML = target.innerHTML + `<p>${name}</p>`)

let p =document.createElement('p')
p.innerText = 'this is a p tag'
console.log(p)
target.appendChild(p)