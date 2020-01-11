/**
 * 84. 柱状图中最大的矩形
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(-1)
    const stack = []
    let max = 0
    for (let i = 0; i < heights.length; i++) {
        const height = heights[i]

        while (stack.length && heights[stack[stack.length - 1]] > height) {
            let idx = stack.pop()
            let left = stack.length ? stack[stack.length - 1] + 1 : 0
            let right = i - 1
            max = Math.max(max, (right - left + 1) * heights[idx])
        }
        stack.push(i)
    }
    return max
};
const arr = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(
    arr
))