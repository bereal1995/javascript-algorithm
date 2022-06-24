/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    
    if(!root.left) return minDepth(root.right) + 1 // 왼쪽없으면 오른쪽
    if(!root.right) return minDepth(root.left) + 1 // 오른쪽없으면 왼쪽
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};