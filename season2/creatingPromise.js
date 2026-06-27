// consumer-side
const cart = ["pants", "shoes", "shirts"]

createOrder(cart).
then(function(orderId){
    console.log(orderId)    // promise chaining
    return orderId     // always return the resolved data while promise chaining
})

.then(function(orderId){
    return proceedToPayment(orderId) // can also return a promise like this 
})

.then(function(paymentInfo){
    console.log(paymentInfo)

})
.catch(function(err){ // handling the rejection of a promise 
    console.log(err.message)
})
.then(function(){
    console.log("i will be called no matter what")
})




// producer-side
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("cart is not valid!");
            setTimeout(function(){
                reject(err)
            }, 5000)
            
        }
        // cart is valid case
        const orderId = "123456";
        if(orderId){
            setTimeout(function(){ // adding fake delay
                    resolve(orderId)
            }, 5000)
        }
        
    })
    return pr;
}

function validateCart(cart){
    return true
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment successfull!");
    })

}