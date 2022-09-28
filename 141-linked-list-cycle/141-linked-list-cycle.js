/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastNode = head;
    let slowNode = head;
    
    while(fastNode) {
        if (fastNode.next){
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
        } else {
            break;
        }
        
        if (fastNode === slowNode) return true
    }
    
    return false;
};
// var hasCycle = function(head) {
//     const hashSet = new Set();
//     let current = head;
    
//     while(head) {
//         if (hashSet.has(head)) {
//             return true
//         }
//         hashSet.add(head);
//         head = head.next;
//     }
    
//     return false;
// };