const divide = (bilangan, pembagi) => {
  setTimeout(() => {
    if (pembagi == 0) {
      return new Error("Pembagi tidak boleh 0");
    }
    if (isNaN(bilangan) || isNaN(pembagi)) {
      return new Error("Pembagian hanya dapat dilakukan terhadap angka");
    }
    const hasil = bilangan / pembagi;
    return hasil;
  }, 1000);
};

const hasil  = divide(10,2)
console.log("ini hasil", hasil)