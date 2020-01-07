/**
 * 88. 合并两个有序数组
 * 
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, p = n + m - 1

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] < nums2[p2]) {
            nums1[p] = nums2[p2]
            p2--
        } else {
            nums1[p] = nums1[p1]
            p1--
        }
        p--
    }
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--]
    }
    console.log(nums1)
};

console.log(
    merge(
        [7, 8, 9, 0, 0, 0],
        3,
        [2, 5, 6],
        3,
    )
)