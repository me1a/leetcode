/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const pivot = nums[nums.length >> 1]
    let pivotCount = 0
    let smaller = []
    let larger = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            smaller.push(nums[i])
        } else if (nums[i] > pivot) {
            larger.push(nums[i])
        } else {
            pivotCount++
        }
    }

    if (k <= larger.length) {
        return findKthLargest(larger, k)
    } else if (k - larger.length - pivotCount <= 0) {
        return pivot
    } else {
        return findKthLargest(smaller, k - larger.length - pivotCount)
    }
};


var findKthLargest = function (nums, k) {
    var target = nums.length - k, left = 0, right = nums.length - 1;
    while (left <= right) {
        var index = partition(nums, left, right);
        if (index === target) return nums[index];
        else if (index < target) left = index + 1;
        else right = index - 1;
    }
};
function partition(nums, left, right) {
    var pivot = nums[left], i = left;
    for (j = i + 1; j <= right; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i, left);
    return i;
}
function swap(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}



// console.log(findKthLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))

console.log(partition([4, 2, 3, 1, 7, 6, 5], 0, 6))