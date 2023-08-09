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



// 最全深拷贝，包含日期，null，正则拷贝

function deepClone(obj) {
  const map = new Map()
  function clone(obj) {
      let newObj = obj instanceof Array ? [] : {}
      if (map.get(obj)) {
          return map.get(obj)
      }
      map.set(obj,newObj)
      for (let i in obj) {
          // for...in 会遍历原型上的属性，此处只拷贝obj对象自身的属性
          if (obj.hasOwnProperty(i)) {
              let type = Object.prototype.toString.call(obj[i])
              if (typeof obj[i] == 'object') {
                  // 拷贝的值为对象，则需要深拷贝
                  if (type == '[object Null]') {
                      newObj[i] = null
                  } else if (type == '[object Date]') {
                      newObj[i] = new Date(obj[i].valueOf())
                  } else if (type == '[object RegExp]') {
                      // 正则对象
                      let pattern = obj[i].valueOf()
                      let flags = ''
                      flags += pattern.global ? 'g' : ''
                      flags += pattern.ignoreCase ? 'i' : ''
                      flags += pattern.multiline ? 'm' : ''
                      newObj[i] = new RegExp(pattern.source, flags)
                  } else if (type == '[object Array]' || type == '[object Object]') {
                      // 数组或对象
                      newObj[i] = clone(obj[i])
                  } else {
                      // 包装对象Number，String，Boolean
                      newObj[i] = obj[i].valueOf()
                  }
              } else if (typeof obj[i] == 'function') {
                  // 函数
                  newObj[i] = new Function('return ' + obj[i].toString())()
              } else {
                  // 拷贝的值为原始值，则直接复制该值
                  newObj[i] = obj[i]
              }
          }
      }
      return newObj
  }
  return clone(obj)
}
