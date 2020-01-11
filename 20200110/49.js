/**
 * 49. 字母异位词分组
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = {}
    strs.forEach(item => {
        let s = Object.values(item).sort().join('')
        if (res[s]) res[s].push(item)
        else res[s] = [item]
    })
    return Object.values(res)
};
console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])))
console.log(JSON.stringify(groupAnagrams(
    ["", "b", ""]
)))
