
// 0 - 1 背包问题
// 状态转换方程
function knapsack(w, val, capacity, n) {
    const T = []
    for (let i = 0; i < n; i++) {
        T[i] = []
        for (let j = 0; j <= capacity; j++) {
            if (j === 0) {
                T[i][j] = 0
                continue
            }
            if (j < w[i]) {
                if (i === 0) {
                    T[i][j] = 0
                } else {
                    T[i][j] = T[i - 1][j]
                }
                continue
            }
            if (i === 0) {
                T[i][j] = val[i]
            } else {
                T[i][j] = Math.max(val[i] + T[i - 1][j - w[i]], T[i - 1][j])
            }
        }
    }
    return T
}

// 找出满足结果
function findValue(w, val, capacity, n, T) {
    let i = n - 1, j = capacity
    const arr = []
    while (i > 0 && j > 0) {
        if (T[i][j] !== T[i - 1][j]) {
            arr.push({ id: i, wight: w[i], value: val[i] })
            i--
            j -= w[i]
        } else {
            i--
        }
    }
    if (i === 0) {
        if (T[i][j] !== 0) {
            arr.push({ id: i, wight: w[i], value: val[i] })
        }
    }
    return arr
}

// test
const w = [2, 3, 4]
const val = [3, 4, 5]
let capacity = 5
let n = val.length

const T = knapsack(w ,val, capacity, n)
const res = findValue(w, val, capacity, n, T)
console.log(res);