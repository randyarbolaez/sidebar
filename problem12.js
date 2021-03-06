// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 
// What is the value of the first triangle number to have over five hundred divisors?

const highlyDivisibleTriangularNumber = () =>{
    let i = 0
    let total = 0;
    while(true){
        let howManyDivisors = divisors(total);
        console.log(howManyDivisors, total)
        if(howManyDivisors > 500){
            return total;
        }
        total += i
        i++;
    }
}

const divisors = (num) => {
    let i = 0;
    let divisors = [];
    while(i !== num){
        if(num % i === 0){
            divisors.push(i)
        }
        i++;
    }
    divisors.push(num)
    return divisors.length;
}

console.log(highlyDivisibleTriangularNumber())
