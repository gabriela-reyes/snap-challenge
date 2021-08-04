// console.log("Is this thing on?")

// This function will bring back a promise pending...
// function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
//     console.log(result)
// }
// handleFetchRequest() YOu can end this function here

// This function pulls up a response in the browser console.
// function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler").then(response => {
//         console.log(response)
//     })
// }

// This brings back another promise... return response.json and use another .then
// function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler").then(response => {
//         const result = response.json()
//         console.log(result)
//     })
// }

// Using this function will bring up an array you can use to write to the DOM. You will have your data and be able to use it.
// function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
//         .then(response => {
//             return response.json()
//         }).then(data => {
//             console.log(data)
//     })
// }

// function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
//         .then(response => {
//             return response.json()
//         }).then(data => {
//             console.log("resolved data", data)
//         })
//     console.log(result)
// }

//This can be a template you can follow:
//function handleFetchRequest(){
//     const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
//         .then(response => {
//             return response.json()
//         }).then(data => {
//             console.log("resolved data", data)

function handleFetchRequest(){
    const result =fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => {
            return response.json()
        }).then(data => {
            let accumulator = ""
            for(let i = 0; i < data.length; i++) {
                accumulator = accumulator + `<p>${data[i]}</p>`
            }
            console.log(accumulator)
            const target = document.getElementById("target").innerHTML = accumulator
        })
}
