
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

### 6. 0 - 1 背包问题(./knapsack.js)

给定一个固定大小的背包，背包的容量为 capacity，有一组物品，存在对应的价值和重量，要求找出一个最佳的解决方案，使得装入背包的物品总重量不超过背包容量 capacity，而且总价值最大。本题中给出了3个物品，其价值和重量分别是 (3,2),(4,3),(5,4)。括号左边为价值，右边为重量，背包容量 capacity 为5。那么求出其搭配组合，使得背包内总价最大，且最大价值为多少？