console.log('hello word')
let name = 'Sue'
console.log(name)
let age = 18
console.log(age)

//array      string 0   1        2          3        4 elements in the array
//arrays start with index number 0
let people = ['Marty', 'Anais', 'Jonathan', 'Andrew']
console.log(people)
let ages = [4, 5, 9, 2]
console.log(ages)

//Anais
console.log(people[1])

//Marty
console.log(people[0])

//objects JSON (JavaScript Object Notation)
let person = {
    name: 'Anais',
    status: 'bootcamper',
    hobby: 'cooking',
    code: function() {console.log('develop website')}
}
console.log(person)
console.log(person.status)
person.code()

let person1 = {
    name: 'Anais',
    status: 'bootcamper',
    hobby: 'cooking',
    code: function() {console.log('develop website')}}

let person2 = {
    name: 'Marty',
    status: 'instructor',
    hobby: 'snowboarding',
    code: function() {console.log('develop website')}
}

let person3 = {
    name: 'Jonathan',
    status: 'bootcamper',
    hobby: 'hiking',
    code: function() {console.log('develop website')}
}

let person4 = {
    name: 'Andrew',
    status: 'bootcamper',
    hobby: 'gameboarding',
    code: function() {console.log('develop website')}
}
let bootcamp = [person1, person2, person3, person4]
console.log(bootcamp)
console.log(bootcamp[2])
console.log(bootcamp[2].hobby)

console.log(bootcamp[2].name + ' likes ' + bootcamp[2].hobby)







