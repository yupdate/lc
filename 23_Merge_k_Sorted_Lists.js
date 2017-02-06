/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    
    while(lists.length>1) {
        for(let i=lists.length-2;i>=0;i-=2){
            const merged = merge(lists[i], lists[i+1]);
            lists.splice(i, 2, merged);
        }
    }
    
    return lists[0];
};

var merge = (l1, l2) => {
    if(!l1) {
        return l2;
    }
    
    if(!l2) {
        return l1;
    }
    
    const dummyNode = new ListNode(0);
    dummyNode.next = l1;
    
    let cur = dummyNode;
    
    while(l1&&l2) {
        if(l1.val>l2.val) {
            const temp = l2;
            l2 = l2.next;
            temp.next = cur.next;
            cur.next = temp;
        }else{
            l1 = l1.next;
        }
        cur = cur.next;
    }
    
    if(l2) {
       cur.next = l2; 
    }
    
    return dummyNode.next;
};
