// console.log(Math.pow(5, 3))

function power(angka, pangkat){
    let result = angka
    for(let i = 1; i < pangkat; i++){
        result *= angka
    }
    console.log(result)
}
// power(5,5)

// result = angka,  result = 5
// 5 * angka, i = 1
// 25 * angka, i = 2 (125)
// 125 * angka, i = 3, i++ (625)

function powerRec(angka, pangkat){
    if (pangkat == 1) return angka
    return angka * (powerRec(angka, pangkat-1)) 
} 

// powerRec(3,3)
// 3 != 1, 3 * (powerRec(3, 2))
// 2 != 1, 3 * 3 * powerRec(3, 1)
// 1 == 1, 3 * 3 * 3 = 27

console.log(powerRec(5,5))
