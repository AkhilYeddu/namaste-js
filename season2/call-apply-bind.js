// how does call method work? -> used for function/method borrowing frpm other objects
const name = {
    firstName : "Akhil",
    lastName : "Yeddu",
    printName : function(){
        console.log(this.firstName +  " " + this.lastName)
    }
}
name.printName();

const name2 = {
    firstName : "Nikhil",
    lastName : "Yeddu"
}
name.printName.call(name2);