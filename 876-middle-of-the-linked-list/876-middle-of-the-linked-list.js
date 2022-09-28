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
    
    while(fastNode?.next) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    
    return slowNode;
    
    
};
