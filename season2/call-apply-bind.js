// how does call method work? -> used for function/method borrowing frpm other objects
const printName = function(hometown, state){
        console.log(this.firstName +  " " + this.lastName + " from " + hometown + ", " + state)
}
const name = {
    firstName : "Akhil",
    lastName : "Yeddu",
   
}
// function borrowing
printName.call(name, "Vizag", "Andhra Pradesh");


const name2 = {
    firstName : "Nikhil",
    lastName : "Yeddu"
}
printName.call(name2, "Hyderabad", "Telangana");
// V/S
printName.apply(name2, ["Hyderabad", "Telangana"]) // apply method 

console.log("bind method:")
// bind method -> returns us a copy of the method, which we can use later on
const printMyName = printName.bind(name2,"Hyderabad", "Telangana") // returns us the copy of the function
printMyName()



