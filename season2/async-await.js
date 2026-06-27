// async - keyword that is used before a function to create an async function

const p = new Promise(function(resolve, reject){
    resolve("Promise resolved value!");
});

async function handlePromise(){
    const val = await p;
    console.log(val)
}
handlePromise();


// ********** V/S **********


function getData(){
    p.then(function(res){
        console.log(res);
    })
}
getData()