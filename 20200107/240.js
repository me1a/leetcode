/**
 * 240. 搜索二维矩阵 II
 * 
 * 
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // for(let i of matrix) {
    //     let l = i.length
    //     if(i[0]===target || i[l-1] === target) return true
    //     if(i[0] < target && i[l-1] >target) {
    //         let start =0, end = i.length, mid = (end - start) >> 1
    //         while(start < end && mid!==start && mid !== end) {
    //             if(i[mid] > target){
    //                 end = mid
    //             } else if(i[mid]<target){
    //                 start = mid
    //             } else {
    //                 return true
    //             }
    //             mid = ((end - start ) >> 1) + start
    //         }
    //     }   
    // }
    // return false

    let row = matrix.length-1, col = 0
    while(row >=0 && col < matrix[0].length) {
        let that = matrix[row][col]
        if(that === target) return true
        else that < target? col++ : row--
    }
    return false
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))