const divide = (bilangan, pembagi, cb) => {
  setTimeout(() => {
    let err;
    if (pembagi == 0) {
      err = new Error("Bilangan tidak bisa dibagi dengan 0");
      cb(err, null); // panggil callback
    }

    if (isNaN(bilangan) || isNaN(pembagi)) {
      err = new Error("Bilangan dan pembagi harus berupa angka");
      cb(err, null); // panggil callback
    }

    const hasil = bilangan / pembagi;
    cb(null, hasil); // panggil callback
  }, 1500);
};

divide(10, 0, (err, hasil) => {
  if(err){
      throw new Error(err)
  }
  console.log(hasil)
});

console.log("ini dijalankan sebelum hasil")