/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let r = obj[target - nums[i]]
        if (r !== undefined) return [r, i]
        obj[nums[i]] = i

    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))