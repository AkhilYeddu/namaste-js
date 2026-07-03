const body = document.body
const div = document.querySelector("div")
const span1 = document.querySelector("#hi")
const span2 = document.getElementById("bye")

span1.classList.add("new")
span1.classList.remove("hi1")
span1.classList.toggle("hi1") // removes if exists, adds if not present
span1.classList.toggle("hi1",true) // adding
span1.classList.toggle('hi1', false) // removing






