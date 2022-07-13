// 深拷贝1
// function deepCopy(obj){
//     return JSON.parse(JSON.stringify(obj))
// }

//深拷贝2
function deepClone1(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === "object") {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = deepClone1(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
}

//深拷贝3
//借助工具loadsh
// _.cloneDeep()