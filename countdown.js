function countDownFor(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

// countDownFor(10)

function countDownRecursive(number) {
  if (number == 0) {
    return;
  } else {
    console.log(number);
    countDownRecursive(number - 1);
  }
}

// countDownRecursive(10);
// 10 != 0, maka dia melakukan console.log(number)
// 9 != 0, maka dia melakukan console.log(9)
// 8 != 0, maka dia console.log(8), 

function sayHello(word){
    if(!word){
        return
    }
    console.log(word)
    sayHello(word.split("").slice(0, word.length-1).join(""))
}
// sayHello("HelloDunia")

function makeStarFor(number){
    for(let i = 1; i <= number; i++){
        console.log("*".repeat(i))
    }
}

makeStarFor(10)

function makeStar(number, now){
    if(now > number) return
    console.log("*".repeat(now))
    makeStar(number, now+1)
}

makeStar(10,1)