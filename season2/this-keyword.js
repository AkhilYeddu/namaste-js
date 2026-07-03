"use strict"
// this in global space
console.log(this) // globalObject = window

// this in function space
function x(){
    // the value depends on strict and non strict mode
    console.log(this)
}


// this inside non-strict mode (this substitution)
// if the value of this keyword is undefined or null,
// this keyword wwill be replaced with globalObject (window) only in non-strict mode

// this keyword value depends on HOW the function is called (window)
x()  // undefined
window.x()  // window object

// this inside object's method
const student = {
    name : "Akhil",
    printName : function(){
        console.log(this) // value of this inside object's method will be object itself
    }
}

student.printName()
const student2 = {
    name : "Nikhil",

}

student.printName.call(student2) // overriding the value of THIS in another function

// this in a arrow function
const obj = {
    a: 100,
    x : ()=>{
        console.log(this) // it will take the "this" value of its enclosing lexical context, in this case, it is window object

    }
}
obj.x()

// this in a nested arrow function
const obj2 = {
    a : 500,
    x : function(){
        const y = ()=>{
            console.log(this)
        }
        y();

    }

}
obj2.x()

// this inside DOM => reference to the HTML element

// explore : this inside class, constructor
