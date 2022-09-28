/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
//     const recursiveFn = (node) => {
//         if (!node) return null
//         const nextNode = recursiveFn(node.next);
        
//         if (node.val === val) {
//             return nextNode;
//         } 
        
//         node.next = nextNode;
//         return node;
//     }
//     const result = recursiveFn(head);
    
    const interate = (node) => {
        const dummyNode = new ListNode()
        dummyNode.next = node;
        
        let current = node;
        let prev = dummyNode;
        
        while(current) {
            if (current.val === val) {
                prev.next = current.next;
                current = current.next;
            } else {
                current = current.next;
                prev = prev.next;
            }
        }
        
        return dummyNode.next;
    }
    const result = interate(head);
    
    return result
    
};