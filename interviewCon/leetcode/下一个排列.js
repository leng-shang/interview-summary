
/**
 * var len = nums.length   
        if (len == 1) {
            return nums
        }
        var a;
        var a_index = 0;
        for (let i = len - 1; i >= 0; i--) { //先找第一个非递减值a  2 1 0
            if (nums[i] > nums[i - 1]) {
                a = nums[i - 1]
                a_index = i - 1
                break
            } else if (i == 0 && nums[i + 1] < nums[i]) {
                return nums.reverse()
            }
        }
        console.log(a,a_index)
        for (let j = len - 1; j > a_index; j--) { //右边求出第一个比他大的值b,交换
            if (nums[j] > a) {
                nums[a_index] = nums[j]
                nums[j] = a
                break
            }
        }
        let left = a_index + 1 //把右边的值改成单增
        let right = len - 1
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--
        }
        return nums 
 */
/*
    例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 
    输入：nums = [1,2,3]
    输出：[1,3,2]
*/
// let nums = [1,2,3]
// let nums = [3,2,1]
// let nums = [1,1,5]

let nums = [2,1,5,10,40,60,50,30,20]

function nextPermutation(nums) {
    let len = nums.length
    if(len==1){
        return nums
    }
    let a;
    let a_index;
    for(let i = len-1;i>=0;i--){
        if(nums[i]>nums[i-1]){
            a = nums[i-1]
            a_index = i-1
            break
        }else if(i==0&&num[i+1]<nums[i]){
            return nums.reverse()
        }
    }

    for(let i = len-1;i>a_index;i--){
        if(nums[i]>a){
            nums[a_index] = nums[i]
            nums[i] = a
            break
        }
    }
    let left = a_index+1
    let right = len-1
    while(left<right){
        [nums[left],nums[right]] = [nums[right],nums[left]]
        left++
        right--
    }
    return nums
}

console.log(nextPermutation(nums))
