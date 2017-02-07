/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//O(n) space
var O_n_Space_findMode = function(root) {
    if(!root) return [];
    
    const res = {}, max = [0];
    countNodes(res, root, max);
    const arr = Object.keys(res).filter((k)=>{
        return res[k] === max[0];
    });
    
    return arr.map((el)=>{ return parseInt(el); })
};

var countNodes = (res, node, max) => {
    if(!node) return;
    res[node.val] = res[node.val] ? res[node.val]+1 : 1;
    
    max[0] = Math.max(max[0], res[node.val]);
    countNodes(res, node.left, max);
    countNodes(res, node.right, max);
};

//O(1)

var findMode = function(root) {
    let curVal, curCount=0, maxCount=0, modes;
    
    let handlerVal = (val) => {
        if(val !== curVal) {
            curVal = val;
            curCount = 0;
        }
        
        curCount++;
        if(curCount > maxCount) {
            maxCount = curCount;
        }else if(curCount === maxCount) {console.log(maxCount, val)
            if(modes) {
                modes.push(val);
            }
        }
    };

    let inorder = (root) => {
        if(!root) return;
    
        inorder(root.left);
        handlerVal(root.val);
        inorder(root.right);
    };
    
    inorder(root);
    curCount = 0;
    modeCount = 0;
    modes = [];
    inorder(root);
    
    return modes;
};

