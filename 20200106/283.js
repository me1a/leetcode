/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // let pos = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         nums[pos++] = nums[i]
    //     }
    // }
    // while (pos < nums.length) nums[pos++] = 0


    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            const temp = nums[i]
            nums.splice(i, 1)
            nums.push(temp)
        }
    }

};
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

console.log(moveZeroes([0, 1, 0, 3, 12]))