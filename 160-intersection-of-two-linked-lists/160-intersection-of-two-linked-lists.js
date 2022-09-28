/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    
    while(nodeA !== nodeB) {
        if(nodeA) {
            nodeA = nodeA.next;
        } else {
            nodeA = headB;
        }
        
        if(nodeB) {
            nodeB = nodeB.next;
        } else {
            nodeB = headA;
        }
    }
    
    return nodeA
};
// var getIntersectionNode = function(headA, headB) {
//     let current = headA;
//     const hashSet = new Set();
    
//     while(current) {
//         hashSet.add(current);
//         current = current.next;
//     }
    
//     current = headB;
    
//     while(current) {
//         if (hashSet.has(current)) {
//             return current
//         }
//         current = current.next
//     }
    
//     return null;
// };