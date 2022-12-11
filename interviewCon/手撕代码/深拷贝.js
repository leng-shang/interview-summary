// 深拷贝1
// function deepCopy(obj){
//     return JSON.parse(JSON.stringify(obj))
// }

//深拷贝2
function isObject(target) {
  if (typeof target === 'object') {
      return true
  }
  return false
}

function isArray(target) {
  if (Array.isArray(target)) {
      return true
  }
  return false
}
function deepClone(target) {
  const map = new Map()
  function clone (target) {
    console.log(map,'map')
      if (isObject(target)) {
          let cloneTarget = isArray(target) ? [] : {};
          if (map.get(target)) {
              return map.get(target)
          }
          map.set(target,cloneTarget)
          for (const key in target) {
              cloneTarget[key] = clone(target[key]);
          }
          return cloneTarget;
      } else {
          return target;
      }
  }
  return clone(target)
};

//深拷贝3
//借助工具loadsh
// _.cloneDeep()