/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let so = {}, to = {}
    for (let i = 0; i < s.length; i++) {
        if (so[s[i]]) so[s[i]] += 1
        else so[s[i]] = 1
        if (to[t[i]]) to[t[i]] += 1
        else to[t[i]] = 1
    }
    for (let i in so) {
        if (so[i] === to[i]) {
            delete to[i]
        } else return false
    }
    for (let i in to) {
        return false
    }
    return true
};