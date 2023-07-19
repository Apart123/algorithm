/*
描述：输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。

如输入{1,2,3}的链表:
返回一个数组为[3,2,1]

0 <= 链表长度 <= 10000

示例1
输入：
{1,2,3}
返回值：
[3,2,1]

示例2
输入：
{67,0,24,58}
返回值：
[58,24,0,67]
*/


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let arr = [];
    while(head) {
        arr.unshift(head.val)
        head = head.next;
    }
    return arr;

}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};




// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }
// function printListFromTailToHead(head)
// {
//     let reverseHead = new ListNode(-1)
//     // 翻转链表
//     while (head !== null) {
//         const pre = head
//         // 下一个结点
//         head = head.next
//         pre.next = reverseHead.next
//         reverseHead.next = pre
//     }
//     // 重新整理 去掉val=-1的点
//     reverseHead = reverseHead.next
//
//     const result = []
//     // 遍历链表
//     while (reverseHead !== null) {
//         result.push(reverseHead.val)
//         // 下一个结点
//         reverseHead = reverseHead.next
//     }
//     return result
// }
// module.exports = {
//     printListFromTailToHead : printListFromTailToHead
// };

