//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
//请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 *  输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
    输出：[[1,6],[8,10],[15,18]]
    解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
/**
 *  对区间进行排序（升序）
    从第一区间起取当前拟合并区间为a，
    取下一区间为b（如果没有b了则输出a，退出）
    如果a的尾 > b 的头 ,则合并为 a，否则输出a，把b作为a
 */
let intervals = [[1, 4], [2, 3], [5, 10],[11,19]]
function getMerge(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]!=b[0]){
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })
    let res =[],len = intervals.length,start,end
    for (let i = 0; i < len; i++) {
        let s = intervals[i][0]
        let e = intervals[i][1]
       if(start == undefined){
            start =s
            end = e
       }else if(s<=end){
            end = Math.max(e,end)
       }else {
           res.push([start,end])
           start =s
           end = e
       }
    }
    if(start!=undefined){
        res.push([start,end])
    }
    return res
}
console.log(getMerge(intervals))

