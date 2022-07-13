const arrs = [
    { id: 1, name: 'A', parentId: 0 },
    { id: 2, name: 'B', parentId: 1 },
    { id: 3, name: 'C', parentId: 1 },
    { id: 4, name: 'D', parentId: 2 },
    { id: 5, name: 'E', parentId: 2 },
    { id: 6, name: 'F', parentId: 3 },
]
/**
 * 数组转换为树
 * @param {*} arrs 
 * @returns 
 */
function array2Tree(arrs) {
    const treeNode = new Map();
    let root = null; // 树根节点
    arrs.forEach((item) => {
        const { id, name, parentId } = item; // 解构赋值
        const node = { id, name }
        treeNode.set(id, node);
        const parentNode = treeNode.get(parentId);
        if (parentNode) {
            if (parentNode.children == null) {
                parentNode.children = [];
            }
            // 找到父节点后，将当前数组项转换的节点添加到子节点列表中
            parentNode.children.push(node)
        }
        if (parentId === 0) {
            root = node;
        }
    })
    return root;
}
const tree = array2Tree(arrs); // 需要定义arrs
console.log(tree,'tree')
/**
 * 树转换为数组
 * @param {*} treeData 
 * @returns 
 */
function tree2Array(treeData) {
    const childToParent = new Map();
    let track = [treeData]
    let res = []
    while (track.length) {
        const curNode = track.pop(); // 出队，从尾部出队，保证先进先出
        if (curNode == null) break
        const { id, name, children = [] } = curNode
        const parentNode = childToParent.get(curNode); // 获取当前节点的父节点
        const parentId = parentNode?.id || 0; // 获取父节点id，根节点设置为0
        const item = { id, name, parentId }; // 定义数组项
        res.push(item); // 插入到数组中
        // 继续遍历子节点，并且子节点入队
        children.forEach(child => {
            // 如果有子节点，则把子节点和当前节点通过Map保持关系
            childToParent.set(child, curNode);

            // 入队
            track.unshift(child);
        })
    }
    return res;
}
const array = tree2Array(tree); // 这个obj对象就是数组转换为树打印出的结果
console.log(array)