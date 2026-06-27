// async - keyword that is used before a function to create an async function

async function getData(){
    return "Namaste";
}

const dataPromise = getData();
console.log(dataPromise)

dataPromise.then(function(res){
    console.log(res);
})