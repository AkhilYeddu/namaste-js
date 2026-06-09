// what are callback functions?

setTimeout(function(){
    console.log("Timer");
},5000)

function x(callback){
    console.log("x");
    callback();
}

x( function y(){
    console.log("y");
} )