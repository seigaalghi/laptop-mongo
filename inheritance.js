class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log("The animal Speaks :")
    }
    getSummary(){
        for(let i = 0; i < 10; i++){
            if(i % 2 == 0) console.log("Genap", i)
        }
        console.log(`This animal named ${this.name} and now is ${this.age} years old`) 
    }
    static sayHello(){
        console.log("Hello World")
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

class Burung extends Animal {
    constructor(name, age, legsColor){
        super(name, age)
        this.legsColor = legsColor
    }
    speak(){
        return `${this.name} say kuuk kuuk~`
    }
}

const anggora = new Kucing("Pusi", 2, "White")

const animal1 = new Animal("Hewan", 1)

console.log(anggora)
console.log(anggora.speak())
anggora.getSummary()

Kucing.sayHello()



// child class dapat mengakses parents method dan property dengan cara menggunakan kata kunci super
// child class mewarisi method yang dimiliki oleh parent class, ini dibuktikan dengan class Kucing dapat memeanggil method getSummary milik parents class
// fungsi utama dari inheritance yaitu mempermudah serta mempersimpel code ketika harus membuat beberapa class yang hampir identik