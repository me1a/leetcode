/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 保存前进方向
    // 斩断过去,不忘前事
    // 继续前行

    // let cur = head
    // let prev = null
    // while (cur !== null) {
    //     // 获取下一个处理对象
    //     const next = cur.next
    //     // 开始反转， 当前的下一个即是上一个处理的对象
    //     cur.next = prev
    //     // 再把当前的处理对象，当成上一个， 用来下一个处理
    //     prev = cur
    //     // 当前对象处理完。 接着处理下一个对象
    //     cur = next
    // }
    // return prev

    return reverse(head, null)
    function reverse(cur, pre) {
        if (!cur) return pre
        const next = cur.next
        cur.next = pre
        return reverseList(next, cur)
    }

};