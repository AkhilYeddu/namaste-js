// how does call method work? -> used for function/method borrowing frpm other objects
const printName = function(){
        console.log(this.firstName +  " " + this.lastName)
    }

const name = {
    firstName : "Akhil",
    lastName : "Yeddu",
   
}
printName.call(name);


const name2 = {
    firstName : "Nikhil",
    lastName : "Yeddu"
}
printName.call(name2);