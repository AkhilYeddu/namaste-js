// async - keyword that is used before a function to create an async function

const p = new Promise(function(resolve, reject){
    resolve("Promise resolved value!");
});


async function getData(){
    return p;
}

const dataPromise = getData();
console.log(dataPromise)

dataPromise.then(function(res){
    console.log(res);
})