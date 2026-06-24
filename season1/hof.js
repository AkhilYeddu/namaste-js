const circles = [3, 1, 2, 4]

const area = function(radius){          // callback function
    return Math.PI * radius * radius 
}
const circumference = function(radius){         // callback function
    return 2* Math.PI * radius
}
const diameter = function(radius){          // callback function
    return 2 * radius
}

Array.prototype.calculate = function(logic){
    
    const output = []
    for(let i = 0 ; i < this.length; i++){ // here, calcuate is a HIGHER ORDER FUNCTION as it is taking other functions as arguements
        output.push(logic(this[i]))         // polyphyl of MAP function
    }
    return output;
}

console.log(circles.calculate(area))
console.log(circles.calculate(diameter))