/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fastNode = head;
    let slowNode = head;
    
    while(fastNode) {
        if (fastNode.next) {
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
        } else {
            break;
        }
    }
    
    return slowNode;
};
// var middleNode = function(head) {
//     let count = 0;
//     let current = head;
    
//     while(current) {
//         current = current.next;
//         count++;
//     }
//     current = head;
//     const halfCount = parseInt(count/2);
    
//     for(let i=0; i<count; i++) {
//         if (halfCount === i) {
//             return current
//         }
//         current = current.next;
//     }
// };