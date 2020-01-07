/**
 * 169. 多数元素
 * 
 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let that, count =0
    for(let num of nums){
        if(count === 0) {
            that = num
        }
        count += (num === that) ? 1: -1
    }
    return that
};

console.log(majorityElement([2,2,1,1,1,2,2]))
