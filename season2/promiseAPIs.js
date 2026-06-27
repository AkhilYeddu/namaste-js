const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P1 success")
    },3000)
})

const p2 = new Promise(function(resolve, reject){
   setTimeout(function(){
    reject("P2 failure")
   },1000)
})
const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P3 success")
    },2000)
})

// Promise.all([p1,p2,p3])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.error(err);
// })

// Promise.allSettled([p1,p2,p3])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.error(err)
// })

// Promise.race([p1, p2, p3])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.error(err);
// })

Promise.any([p1, p2, p3])
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.error(err)
    console.error(err.errors) // all aggregate error values are stiored "errors" array
})