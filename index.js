const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]

  function getChildren(arr, id) {
    const res = [];
    for (const item of arr) {
      if (item.pid === id) { // 找到当前id的子元素
        // 插入子元素，每个子元素的children通过回调生成
        res.push({...item, children: getChildren(arr, item.id)});
      }
    }
    return res;
  }
  
  console.log(getChildren(arr, 0))