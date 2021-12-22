class Car {
  constructor(name, price) {
    if (this.constructor == Car) {
      throw new Error("Cannot initiate abstract class to an object");
    }
    this.name = name;
    this.price = price;
  }
  getSummary() {}
}

class Suv extends Car {
  constructor(name, price, speed) {
    super(name, price);
    this.speed = speed;
  }
  getSummary() {
    console.log(
      "This Suv car named",
      this.name,
      "and price of",
      this.price,
      "with speed of",
      this.speed
    );
  }
  print(){
      this.getSummary()
  }
}

fortuner = new Suv("Fortuner", 470000000, "200km/h");
console.log(fortuner.name);
fortuner.getSummary();

let angka = 10