// //如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false
// let arr = ['d','a','b','c','a']

// function containDuplicate(arr){
//     let flag = false
//     arr.reduce((prev,current,index)=>{
//        prev[current]?flag = true:prev[current] = true
//        return prev
//     },{})
//     return flag
//     // for (const key in arr) {
//     //     if(arr.indexOf(arr[key])!=key){
//     //         return true
//     //     }
//     // }
//     // return false
// }
// // console.log(containDuplicate(arr))

// //给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
// let s='loveleetcode'
// function noRepet(s){
//     let arr = s.split('')
//     let obj = arr.reduce((prev,current,index)=>{
//         prev[current]?prev[current] = 1000000:prev[current] = index
//         return prev
//     },{})
//     return Math.min(...Object.values(obj))
// }
// console.log(noRepet(s))

// // 示例 1：
// // 输入：
// // let v = "()"
// // 输出：true

// // 示例 2：
// // 输入：
// // let v = "()[]{}"
// // 输出：true

// // 示例 3：
// // 输入：
//     // let v = "(]"
// // 输出：false

// // 示例 4：
// // 输入：v = "([)]"
// // 输出：false

// // 示例 5：
// // 输入：
// let v = "([])"
// // 输出：true

// const isValid = (s) => {
//     while (true) {
//       let len = s.length
//       // 将字符串按照匹配对，挨个替换为''
//       s = s.replace('{}', '').replace('[]', '').replace('()', '')
//       // 有两种情况s.length会等于len
//       // 1. s匹配完了，变成了空字符串
//       // 2. s无法继续匹配，导致其长度和一开始的len一样，比如({],一开始len是3，匹配完还是3，说明不用继续匹配了，结果就是false
//       if (s.length === len) {
//         return len === 0
//       }
//     }
// }

// console.log(isValid(v))

/**
 *  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *  输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
 */
// let s = "abcabcbb"
// let s = 'aabcddasdfgh' //12 3
// function lengthOfLongestSubstring(s) {
//     let sum = '';
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         let now = s.charAt(i);
//         if (sum.indexOf(s.charAt(i)) > -1) {
//             sum = sum.substring(sum.indexOf(s.charAt(i)) + 1) + s.charAt(i);
//         } else {
//             sum += now;
//             max < sum.length ? max = sum.length : max;
//         }
//     }
//     return max
// }
// console.log(lengthOfLongestSubstring(s))

/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
   输出："bab"
   解释："aba" 同样是符合题意的答案。
 */
// let s = "aacabdkacaa"
// function longestPalindrome(s) {
//     let sum = ''
//     for (let i = 0; i < s.length; i++) {
//         let now = ''
//         for(let j = i; j < s.length; j++){
//             now+=s.charAt(j)
//             let bool = (now===now.split("").reverse().join(""));
//             if(bool&&now.length>sum.length){
//                 sum = now
//             }
//         }

//     }
//     return sum
// }
// console.log(longestPalindrome(s))

/**
 * 输入：[1,8,6,2,5,4,8,3,7]
   输出：49 
   解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
*/
// let height = [1,8,6,2,5,4,8,3,7]
// function maxArea(height){
//    let max = 0
//    for(i=0;i<height.length-1;i++){
//         for(j=i+1;j<height.length;j++){
//             let num =  (j-i)*Math.min(height[i],height[j])
//             if(num>max){
//                 max = num
//             }
//         }
//    }
//    return max
// }
// console.log(maxArea(height))
