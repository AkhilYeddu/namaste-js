var x = 1;
console.log(x);
a(); // because of hoisting
b();

function a(){
    var x = 10;
    console.log(x)
}

function b(){
    var x = 100;
    console.log(x);
}