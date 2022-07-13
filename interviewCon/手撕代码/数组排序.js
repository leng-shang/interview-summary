//一
function arrSort(arr){  
    return arr.sort((a,b)=>{
        return a.id-b.id
    })
}
let arr = [
    {
        id:5
    },
    {
        id:1
    },
    {
        id:9
    },
    {
        id:12
    },
]
console.log(arrSort(arr))
//二
function bubbling(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if(arr[j]>arr[j+1]){
            let num = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = num
          }
        }        
    }
    return arr
}

console.log(bubbling([2, 3, 1, 5, 4]))
