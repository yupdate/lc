/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._min = [];
    this._arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._arr.push(x);
    this._min.push(this._min.length ? Math.min(this._min[this._min.length-1], x) : x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._min.pop();
    this._arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._arr[this._arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._min[this._min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
