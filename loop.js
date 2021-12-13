// loop (perluangan)
// while
let angka = 10

function hitungMundur(){
    let arr = ["a", "b", "c", "d", 5, 4]
    let index = 0

    while( index < arr.length ){
        if(arr[index] == "d") {
            index++
            continue
        }
        console.log("belum saatnya a", arr[index])
        index++
    }

    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] == "d") continue
        console.log("belum saatnya", arr[i])
    }
}

hitungMundur()


