class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * 
     * @param {number} val
     * @returns {void} 
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * 
     * @returns {void}
     */
    pop() {
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return this.stack.pop();
    }

    /**
     * 
     * @returns {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * 
     * @returns {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3

minStack.pop();
console.log(minStack.top()); // 0

console.log(minStack.getMin()); // -2

// Time complexity: O(1)
// Space complexity: O(n)