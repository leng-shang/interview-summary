/**
 * 
 * @param {*} numBottles 
 * 
 * @param {*} numExchange 
 * 
 */
 numBottles = 15, 
 numExchange = 4
 //输出 13
function numWaterBottles(numBottles,numExchange){
    let sum = numBottles
    while(numBottles/numExchange>=1){
        sum+=parseInt(numBottles/numExchange)
        numBottles = parseInt(numBottles/numExchange+numBottles%numExchange)
    }
    return sum
}

console.log(numWaterBottles(numBottles,numExchange))