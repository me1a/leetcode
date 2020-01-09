/**
 * 66. 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let over = 1, l = digits.length
    for (let i = l - 1; i >= 0; i--) {
        let res = over + digits[i]
        if (res > 9) {
            over = 1
            digits[i] = res - 10
        } else {
            digits[i] = res
            over = 0
        }
    }
    if (over !== 0) digits.unshift(1)
    return digits
};