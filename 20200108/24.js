const singleLinkedTransform = require('../utils/singleLinked')
function ListNode(v) {
    this.val = v
    this.next = null
}

/**
 * 24. 两两交换链表中的节点
 * 
 * 
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
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
var swapPairs = function (head) {
    // if (!head) return null
    // let arr = []
    // let first = true
    // let cache = null
    // while (head !== null) {
    //     if (first) {
    //         cache = head
    //         first = false
    //     } else {
    //         arr.push(head)
    //         arr.push(cache)
    //         cache = null
    //         first = true
    //     }
    //     head = head.next
    // }
    // if (cache !== null) arr.push(cache)
    // arr.push(null)
    // for (let i = 0; i < arr.length - 1; i++) {
    //     arr[i].next = arr[i + 1]
    // }
    // return arr[0]


    // if (!head || !head.next) return head
    // let next = head.next // 第二个
    // head.next = swapPairs(head.next.next) // 第三个
    // next.next = head // 第三个
    // return next

    let pre = new ListNode(0)
    pre.next = head
    let tem = pre
    while (tem.next && tem.next.next) {
        let start = tem.next
        let end = tem.next.next
        tem.next = end
        start.next = end.next
        end.next = start
        tem = start
    }
    return pre.next

};


console.log(singleLinkedTransform(swapPairs)([1, 2, 3, 4, 5, 6, 7, 8, 9]))