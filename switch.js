function identifikasiUmur(umur) {
  switch (umur) {
    case "MI":
    case "SD":
      console.log("Anak SD");
      break;
    case "SMP":
      console.log("Anak SMP");
      break;
    case "SMA":
      console.log("Anak SMA");
      break;
    default:
      console.log("Gatau deh anak apa");
  }
}

function identifikasiIf(umur) {
  if (umur < 12) {
    console.log("Anak SD");
  } else if (12 < umur < 16) {
    console.log("Anak SMP");
  } else if (umur == 18) {
    console.log("Anak SMA");
  } else {
    console.log("Gatau deh anak apa");
  }
}

identifikasiUmur("MI");
identifikasiIf(13);
