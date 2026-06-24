const cart = ["shoes", "pants", "shirts"]

// const promise = api.createOrder()
// promise.then(function(){
//     api.proceedToPayment()
// })

// fetch() is a webAPI ! 
const user = fetch("https://api.github.com/users/AkhilYeddu") // now this is a promise object

user.then(function(data){
    console.log(data);
    console.log("successfully fetched user data! ")
})

// createOrder(cart)
//     .then((orderId)=> return proceedToPayment(orderId))
//     .then((paymentInfo)=> return showOrderSummary(paymentInfo))
//     .then((oaymentInfo)=> return updateWalletBalance(paymentInfo))
// this is known as promise chaining.
