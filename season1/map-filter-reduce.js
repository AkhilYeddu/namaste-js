const arr = [5,1,3,2,4,6]
function double(x){
    return x * 2; // picks the each element in the array internally
}
function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(2);
}

const output = arr.map(binary)
const output1 = arr.map((x)=>x*3)

const output2 = arr.filter((x)=> x>4)

console.log(output)
console.log(output1)
console.log(output2)

const output3 = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc 
},0)

console.log(output3)