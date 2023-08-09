/**第813题
 * 给定数组 nums 和一个整数 k 。我们将给定的数组 nums 分成 最多 k 个相邻的非空子数组 。 分数 由每个子数组内的平均值的总和构成。
   注意我们必须使用 nums 数组中的每一个数进行分组，并且分数不一定需要是整数。
   返回我们所能得到的最大 分数 是多少。答案误差在 10-6 内被视为是正确的
 * 

输入: nums = [9,1,2,3,9], k = 3
输出: 20.00000ß
解释: 
nums 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20. 
我们也可以把 nums 分成[9, 1], [2], [3, 9]. 
这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值
 */
let nums = [4,1,7,5,6,2,3], k = 4


function largestSumOfAverages (nums,k){
    let maxNum = 0
    while(k>1){
        let max = Math.max(...nums)
        maxNum = maxNum + max
        let index = nums.indexOf(max)
        nums.splice(index,1)
        k--
        if(k==1){
            let n = nums.reduce((current,item)=>{
                current = current+item
                return current
            },0)
            console.log(n,'m')
            maxNum = maxNum + n/nums.length
        }
        
    }
    console.log(maxNum)
    return maxNum
}


largestSumOfAverages(nums,k)