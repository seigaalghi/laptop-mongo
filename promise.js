const divide = (bilangan, pembagi) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pembagi == 0) {
        reject(new Error("Pembagi tidak boleh 0"));
      }
      if (isNaN(bilangan) || isNaN(pembagi)) {
        reject(new Error("Pembagian hanya dapat dilakukan terhadap angka"));
      }
      resolve(bilangan / pembagi);
    }, 1000);
  });
};

divide(10, 1)
  .then((res) => console.log("ini hasil", res))
  .catch((err) => console.log(err));

const execute = async () => {
  try {
    const hasil = await divide("s", 2);
    console.log("Ini hasil", hasil);
  } catch (error) {
    console.log("Ini error", error.message);
  }
};

execute();
