// async - keyword that is used before a function to create an async function

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise fullfilled!")
    },2000)
    
    
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise fullfilled!")
    },5000)
    
    
});

async function handlePromise(){   // here js engine waits till the promise is resolved
    console.log("print me first!")
    const val1 = await p1;
    console.log("checking1")
    console.log(val1)
                    // waits for 10 secs at p1, then the p2 gets printed simultaneously
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
