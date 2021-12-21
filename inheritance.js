class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log("The animal Speaks :")
    }
    getSummary(){
        return `This animal named ${this.name} and now is ${this.age} years old`
    }
}

class Kucing extends Animal {
    constructor(name,age,color){
        super(name, age)
        this.color = color
    }
    speak(){
        return `${this.name} say meow`
    }
}

const anggora = new Kucing("Pusi", 2, "White")

console.log(anggora)
console.log(anggora.speak())
console.log(anggora.getSummary())


// child class dapat mengakses parents method dan property dengan cara menggunakan kata kunci super
// child class mewarisi method yang dimiliki oleh parent class, ini dibuktikan dengan class Kucing dapat memeanggil method getSummary milik parents class
// fungsi utama dari inheritance yaitu mempermudah serta mempersimpel code ketika harus membuat beberapa class yang hampir identik