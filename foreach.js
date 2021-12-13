let angkas = ["satu", "dua", "tiga", "empat", "lima"];

let angkaBaru = angkas.filter(function (e, i, a) {
  if (e != "empat") {
    return e;
  }
});

let angkaBaru2 = angkas.map(function(e, i, a){
    if(e != "empat"){
        return e
    }
})
let angkaBaru3 = []

angkas.forEach(function(e, i, a){
    if(e != "empat"){
        angkaBaru3.push(e)
    }
})

console.log(angkaBaru);
console.log(angkaBaru2);
console.log(angkaBaru3);
