// Adding element
const body = document.body
// body.append("HELLO WORLD!")

// creating element
const div = document.createElement("div")
body.append(div)

// modifying element text
// div.textContent ="Hello World! "

// const div = document.querySelector("div")
// console.log(div.innerText)
// console.log(div.textContent)

// if you want to render HTML inside a div, or any other HTML element, we do it using .innerHTML()
div.innerHTML ="<strong> Hello World!</strong>"
