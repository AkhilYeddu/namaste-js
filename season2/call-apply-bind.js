// how does call method work? -> used for function/method borrowing frpm other objects
const printName = function(hometown, state){
        console.log(this.firstName +  " " + this.lastName + " from " + hometown + ", " + state)
}
const name = {
    firstName : "Akhil",
    lastName : "Yeddu",
   
}
printName.call(name, "Vizag", "Andhra Pradesh");


const name2 = {
    firstName : "Nikhil",
    lastName : "Yeddu"
}
printName.call(name2, "Hyderabad", "Telangana");