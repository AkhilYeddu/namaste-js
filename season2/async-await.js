// async - keyword that is used before a function to create an async function

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise fullfilled!")
    },10000)
    
    
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise fullfilled!")
    },5000)
    
    
});

// Both timers are already running before handlePromise() starts.
// handlePromise() doesnt block the main thread.
async function handlePromise(){   
    const val1 = await p1;
    console.log("checking1")
    console.log(val1)
                    
    const val2 = await p2;
    console.log("checking2")
    console.log(val2)
    
}
handlePromise();


// ********** V/S **********

// function getData(){ // js engine will not wait for the promise to resolve
//     p.then(function(res){ 
//         console.log(res);       
//     })
//     console.log("checking"); 
// }
// getData()
