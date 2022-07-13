

//Set / Map的区别
/**
 *  Set 对象是值的集合，每个元素只会出现一次
    Set类似于数组，但是它里面每一项的值是唯一的，没有重复的值，Set是一个构造函数，用来生成set的数据结构 .数组去重(利用扩展运算符)
*/
/**
 *  Map对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或基本类型）都可以作为一个键或一个值
    Map对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。构造函数Map可以接受一个数组作为参数,数组的成员是一个个表示键值对的数组。注意Map里面也不可以放重复的项。
*/

// 综上所述，主要有一下几个区别：
// 1.Map是键值对，Set是值的集合，当然键和值可以是任何的值；
// 2.Map可以通过get方法获取值，而set不能因为它只有值；
// 3.都能通过迭代器进行for…of遍历；
// 4.Set的值是唯一的可以做数组去重，Map由于没有格式限制，可以做数据存储
// 5.map和set都是stl中的关联容器，map以键值对的形式存储，key=value组成pair，是一组映射关系。set只有值，可以认为只有一个数据，并且set中元素不可以重复且自动排序。

//方法：
//Set方法
const s = new Set('1')
s.add(0)
//方法：
    //add，delete，keys，values,has
//属性：size 
// new Set()	创建新的 Set 对象。
// add()	向 Set 添加新元素。
// clear()	从 Set 中删除所有元素。
// delete()	删除由其值指定的元素。
// entries()	返回 Set 对象中值的数组。
// has()	如果值存在则返回 true。
// forEach()	为每个元素调用回调。
// keys()	返回 Set 对象中值的数组。
// values()	与 keys() 相同。
// size	返回元素计数。

let a =()=>{

}
//Map方法
let m = new Map()
m.set('apples', 500);
m.set('bananas', 300);
m.set('oranges', 200);
m.set([a],'1231')
console.log(m)
console.log(m.get('apples'))
console.log(Array.from(m.keys()))
/**
 *方法：
    new Map()	创建新的 Map 对象。
    set()	为 Map 对象中的键设置值。
    get()	获取 Map 对象中键的值。
    entries()	返回 Map 对象中键/值对的数组。
    keys()	返回 Map 对象中键的数组。
    values()	返回 Map 对象中值的数组 
    clear()	删除 Map 中的所有元素。
    delete()	删除由键指定的元素。
    has()	如果键存在，则返回 true。
    forEach()	为每个键/值对调用回调。
 *属性：
    size
*/

