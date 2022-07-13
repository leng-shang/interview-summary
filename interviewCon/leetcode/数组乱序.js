let arr = [1,2,3,4]

function shuffle(arr) {
    // let m = arr.length;
    // while (m > 1){
    //     let index = Math.floor(Math.random() * m--);
    //     [arr[m] , arr[index]] = [arr[index] , arr[m]]
    // }
    // return arr;
    return arr.sort(()=>Math.random()-0.5)
}

arr.forEach(()=>{
    console.log(shuffle(arr))
})

