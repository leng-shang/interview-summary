/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */
// let nums = [-1,0,1,2]
// let nums = [-1,0,1,2,-1,-4]
// function threeSum(nums){
//     let r= []
//     let res = []
//     nums.forEach((oItem,oindex)=>{
//        nums.forEach((tItem,tindex)=>{
//             nums.forEach((Titem,Tindex)=>{
//                 if(oItem+tItem+Titem==0&&oindex!=tindex&&oindex!=Tindex&&tindex!=Tindex){
//                     r.push([oItem,tItem,Titem])
//                 }
//             })
//        })
//     })
//     r1 = r.map((item)=>{
//         return item.sort((a,b)=>a-b)
//     })
//     let obj = {}
//     r.forEach((item)=>{
//         if(!obj[JSON.stringify(item)]){
//             obj[JSON.stringify(item)] = item
//             res.push(item)
//         }
//     })
//     console.log(res,'res')
//     return res
// }

// threeSum(nums)

// let nums = [-1, 0, 1, 2, -1, -4]
let nums = [-1,0,1,2]

function threeSum(nums) {
    let r= []
    let res = []
    for(let i =0 ;i<nums.length-2;i++){//-1
        for(let j=i+1;j<nums.length;j++){//0
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]==0){
                    if(res.indexOf(JSON.stringify([nums[i],nums[j],nums[k]].sort((a,b)=>a-b)))==-1){
                        res.push(JSON.stringify([nums[i],nums[j],nums[k]].sort((a,b)=>a-b)))
                        r.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }   
    }
    console.log(r)
    return r
}

threeSum(nums)