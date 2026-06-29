// async - keyword that is used before a function to create an async function

const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise fullfilled!")
    },5000)
    
    
});

async function handlePromise(){   // here js engine waits till the promise is resolved
    console.log("print me first!")
    const val1 = await p;
    console.log("checking1")
    console.log(val1)
                                    // both gets printed simultaneously !!
    const val2 = await p;
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
