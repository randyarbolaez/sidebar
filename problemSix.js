// The difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = () =>{
    let sumOfSquares = 0;
    let squareOfSums = 0;

    for(let i = 1;i<=100;i++){
        sumOfSquares = sumOfSquares + i ** 2;
        squareOfSums += i;
    }


    return (squareOfSums ** 2) - sumOfSquares;
}

console.log(sumSquareDifference())
