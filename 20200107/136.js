/**
 * 给你一个长度为 n 的数组，其中只有一个数字出现了奇数次，其他均出现偶数次，问如何使用优秀的时空复杂度快速找到这个数字。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let s =0
    for(let i of nums){
        s ^= i
    }
    return s
};

console.log(singleNumber([4,1,2,1,2]))