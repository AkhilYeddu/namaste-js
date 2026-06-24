function counter(){
    var count  = 0;
    return function increaseCounter(){
        count++;
        console.log(count)
    }
}

const x = counter()
const y = counter()
x();
x();
y();
y();