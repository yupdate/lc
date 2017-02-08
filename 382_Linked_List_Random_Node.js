/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this._head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let total = 1, node = this._head;
    
    let res=node.val;
    
    //Reason max+1 is :
    //getting random from [min, max)
    //parseInt(Math.random()*(max-min)) + min
    const randomNum = (min, max)=>{
        return parseInt(Math.random() * (max+1-min)) + min;  
    };
    while(node.next) {
        node = node.next;
        if(randomNum(0, total) === total) res = node.val;
        total++;
        
    }
    return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
