function factorial(number){
    let result = 1
    for(let i = 2; i <= number; i++){
        result *= i
    }
    console.log(result)
}
// factorial(5)

// result = 1
// result *= 2 (2)
// result *= 3 (6)
// result *= 4 (24)
// result *= 5 (120)
// i = 6, i !<= 5, maka perulangan berhenti
// hasil akhir 120

function factorialRec(number){
    if(number == 1) return number
    return number * factorialRec(number-1)
}
console.log(factorialRec(5))

// 5 != 1, 5 * factorial(4)
// 4 != 1, 5 * (4 * factorial(3))
// 3 != 1, 5 * 4 * (3 * factorial(2))
// 2 != 1, 5 * 4 * 3 * (2 * factorial(1))
// 1 == 1, 5 * 4 * 3 * 2 * (1)