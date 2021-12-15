class Mobil {
    constructor(name, year, price){
        this.name = name
        this.year = year
        this.price = price
    }
    setVariabel(name, year, price){
        this.name = name
        this.year = year
        this.price = price
    }
    getSummary(say){
        console.log(say)
        return `Mobil namanya ${this.name}, umurnya ${ new Date().getFullYear() - this.year } tahun, dan harganya ${this.price} `
    }
}

const daihatsu = {
    name : "Sigra",
    year : 2015,
    price : 170000000,
    getSummary(){
        return `Mobil namanya ${this.name}, umurnya ${ new Date().getFullYear() - this.year } tahun, dan harganya ${this.price} `
    }
}


const wuling = new Mobil("Confero", 2018, 220000000)
const toyota = new Mobil("Rush", 2010, 250000000)
const honda = new Mobil("Mobilio", 2014, 200000000)
const mitsubishi = new Mobil("Xpander", 2014, 260000000)

// console.log(wuling.getSummary("Hello Dunia"))
// console.log(toyota.getSummary("Hello Dunia"))
// console.log(daihatsu.getSummary())
// console.log(honda.getSummary("Hello Dunia"))
mitsubishi.setVariabel("Xpander", 2014, 260000000)
console.log(mitsubishi)