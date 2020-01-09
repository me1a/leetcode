const singleLinkedTransform = require('../utils/singleLinked')

/**
 * 25. K 个一组翻转链表
 * 
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // let cur = head, count = 0
    // while (cur !== null && count !== k) {
    //     cur = cur.next
    //     count++
    // }
    // if (count === k) {
    //     cur = reverseKGroup(cur, k)
    //     while (count-- > 0) {
    //         const tem = head.next
    //         head.next = cur
    //         cur = head
    //         head = tem
    //     }
    //     head = cur
    // }
    // return head

    let n = 0, cur = head
    while (cur) {
        n++
        cur = cur.next
    }

    const dmy = new ListNode(0)
    dmy.next = head
    for (let prev = dmy, tail = head; n >= k; n -= k) {
        for (let i = 1; i < k; i++) {
            let next = tail.next.next
            tail.next.next = prev.next
            prev.next = tail.next
            tail.next = next
        }

        prev = tail
        tail = tail.next

    }
    return dmy.next

};


console.log(singleLinkedTransform(reverseKGroup)([1, 2, 3, 4, 5], 3))