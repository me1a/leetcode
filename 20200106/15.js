/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 找出所有满足条件且不重复的三元组。
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const results = []

    // obviously irrelevant if we don't have at least 3 numbers to play with!
    if (nums.length < 3) return results

    // having the numbers in ascending order will make this problem much easier.
    // also, knowing the overall problem  will take at least O(N^2) time, we can
    // afford the O(NlogN) sort operation
    nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
    let target = 0

    for (let i = 0; i < nums.length - 2; i++) {
        // `i` represents the "left" most number in our sorted set.
        // once this number hits 0, there's no need to go further since
        // positive numbers cannot sum to a negative number
        if (nums[i] > target) break

        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // `j` represents the "middle" element between `i` and `k`.
        // we will increment this up through the array while `i` and `k`
        // are anchored to their positions. we will decrement `k` for
        // for each pass through the array, and finally increment `i`
        // once `j` and `k` meet.
        let j = i + 1

        // `k` represents the "right" most element
        let k = nums.length - 1

        // to summarize our setup, we have `i` that starts at the beginning,
        // `k` that starts at the end, and `j` that races in between the two.
        //
        // note that `i` is controlled by our outer for-loop and will move the slowest.
        // in the meantime, `j` and `k` will take turns inching towards each other depending
        // on some logic we'll set up below. once they collide, `i` will be incremented up
        // and we'll repeat the process.

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            // if we find the target sum, increment `j` and decrement `k` for
            // other potential combos where `i` is the anchor
            if (sum === target) {
                // store the valid threesum
                results.push([nums[i], nums[j], nums[k]])

                // this is important! we need to continue to increment `j` and decrement `k`
                // as long as those values are duplicated. in other words, we wanna skip values
                // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
                // [[-2,0,2], [-2,0,2]].
                //
                // (i'm not a fan of this part because we're doing a while loop as we're
                // already inside of another while loop...)
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--

                // finally, we need to actually move `j` forward and `k` backward to the
                // next unique elements. the previous while loops will not handle this.
                j++
                k--

                // if the sum is too small, increment `j` to get closer to the target
            } else if (sum < target) {
                j++

                // if the sum is too large, decrement `k` to get closer to the target
            } else { // (sum > target)
                k--
            }
        }
    }

    return results
};

console.log(threeSum([2, 13, -2, -5, -1, 10, 6, -8, 5, -5, 7, -5, -14, -4, -5, 10, -15, -2, -14, -6, 10, 6, -14, -14, -9, -11, 8, -3, -2, 12, -9, -14, 3, 5, -12, -13, -8, 1, -14, 12, 12, 0, 14, 5, 4, -14, -8, 4, -9, -7, 14, -13, 6, 7, -12, 5, 12, 11, -13, -5, 0, -6, -12, -12, 6, 13, 12, 13, 0, 5, 2, -11, 13, 1, 9, 2, 2, -14, 13, 8, -14, 4, 2, 8, -3, -3, -10, -14, -15, 14, -12, 1, -15, 14, -4, 6, 12, -6, -4, -3, 6, 5]))