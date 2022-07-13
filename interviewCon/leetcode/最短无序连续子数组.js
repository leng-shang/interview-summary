/**
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
   请你找出符合题意的 最短 子数组，并输出它的长度。
*/
// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。

// let nums = [2,6,4,8,10,9,15]
// let nums = [2,3,4,5,6,0,9]
// let nums = [3, 2, 3, 2, 4]  //4
// let nums = [2,3,3,2,4]  //3
// let nums = [1,1,2,3,4] //0
// let nums = [1,2,3,5,4]  //2
// function findUnsortedSubarray(nums){
//     if(nums.indexOf(Math.min(...nums))!=0&&nums.lastIndexOf(Math.max(...nums))!=nums.length-1){
//         return nums.length
//     }
//     let newNums = JSON.parse(JSON.stringify(nums))
//     let minIndex = 0
//     let maxArr  = []
//     let len = 0
//     let j = 0
//     while(nums[j]==Math.min(...newNums)){
//         j++
//         minIndex = j
//         newNums.shift()
//     }   
//     for(let i = minIndex;i<nums.length;i++){
//         maxArr.push(nums[i])
//         if(maxArr.lastIndexOf(Math.max(...maxArr))!=maxArr.length-1){
//             len = i - minIndex+1
//         }
//     }
//     return len
// }

let nums = [1,3,2,4,5]
function findUnsortedSubarray(nums) {
    if (nums.indexOf(Math.min(...nums)) != 0 && nums.lastIndexOf(Math.max(...nums)) != nums.length - 1) {
        return nums.length
    }
    let newNums = JSON.parse(JSON.stringify(nums))
    let j = 0
    let k = nums.length-1
    while (nums[j] == Math.min(...newNums)) {
        j++
        newNums.shift()
    }
    while (nums[k] == Math.max(...newNums)) {
        k--
        newNums.pop()
    }
    return newNums.length
}

console.log(findUnsortedSubarray(nums))