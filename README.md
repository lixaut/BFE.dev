
## 1. [柯里化currying](./currying.js)

```js
// 实现函数的柯里化，达到如下效果
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
```

### 2. [currying-placeholder](./currying-placeholder.js)

```js
// 实现支持placeholder的柯里化，要求如下
const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
const _ = curry.placeholder
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
```

### 3. [flat](./flat.js)

```js
const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]
```

### 4. [打乱一个数组](./shuffle.js)

### 5. [解码隐藏信息](./decode.js)

1. 当尝试访问可能不存在的对象属性时，可选链运算符`?.`将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链运算符也是很有帮助的。