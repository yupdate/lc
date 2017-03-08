/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    
    const res = [];
    
    const getPath = (path, node) => {
        if(node.left === null && node.right === null) {
            res.push(path.join('->'));
            return;
        }
        
        if(node.left) {
            path.push(node.left.val);
            getPath(path, node.left);
            path.pop();
        }
        
        if(node.right) {
            path.push(node.right.val);
            getPath(path, node.right);
            path.pop();
        }
    };
    
    getPath([root.val], root);
    return res;
}
