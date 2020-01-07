/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
let c = 0
var climbStairs = function (n) {
    let cache = {}
    var fi = function (n) {
        if (cache[n]) return cache[n]
        c++
        if (n === 1) {
            cache[n] = 1
            return 1
        } else if (n === 2) {
            cache[n] = 2
            return 2
        } else {
            cache[n] = fi(n - 1) + fi(n - 2)
            return cache[n]
        }
    }
    return fi(n)
};


var climbStairs1 = function (n) {
    let r = 1, g = 2
    while (--n) {
        c++
        g = g + r
        r = g - r
    }
    return r
};


console.log(climbStairs1(100))
console.log(c)