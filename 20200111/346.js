// 346. 数据流中的移动平均值

// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.list = []
    this.size = size
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.list.push(val)
    this.sum += val
    if (this.list.length > this.size) {
        const v = this.list.shift()
        this.sum -= v
    }
    return this.sum / this.list.length

};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

let m = new MovingAverage(3);
let a = m.next(1)
a = m.next(10)
a = m.next(3)
a = m.next(5)
