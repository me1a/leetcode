/**
 * 21. 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // if (l1 == null) return l2;
    // if (l2 == null) return l1;
    // if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }

    let first = new ListNode()
    let pre = first
    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }

    pre.next = l2 === null ? l1 : l2
    return first.next
};