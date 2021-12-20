const arr = [{ nilai : "satu", indeksKe : 0 }, "dua", "tiga", "empat"];

const [{nilai, ...sisaA}, b, ...rest] = arr;

// console.log(nilai, b);
// console.log(rest)

const request = [
    {
        nama : "Seiga",
        email : "seigaalghi@gmail.com",
        password : "abcd1234"
    },
    {
        nama : "bayu",
        email : "bayu@gmail.com",
        password : "abcd1234"
    },
    {
        nama : "Affandi",
        email : "affandi@gmail.com",
        password : "abcd1234"
    }
]

// const [{nama : namaSeiga}, {nama : namaBayu}, ...sisaRequest] = request

// console.log(namaSeiga, namaBayu, sisaRequest)

// console.log(request)
// console.log(...request)
// console.log(request[0], request[1], request[2])


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]

console.log(arr3)

const newObj = {
    pekerjaan : "Developer",
    ...request[0]
}

console.log(newObj)