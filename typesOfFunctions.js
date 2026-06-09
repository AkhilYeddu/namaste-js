// Function Statement
function a(){
    console.log("A called!");
}
a();

// Function Expression
var b = function(){
    console.log("B called!");
}
b(); // function expressions are not hoisted

// Anonymous Function

function(){
    console.log("hi")
}

// Named Function Expression

var b = function xyz(){
    console.log("hello");
    xyz(); // possible

 
}
b();
// xyz();  not possible


// Arguements V/S Parameters

function example(Parameters){
    console.log("Hello");
}

example(Arguements)