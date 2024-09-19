/**
 * Valid Parentheses solution, time complexity O(n) and space complexity O(n)
 * @param {string} s 
 * @returns {boolean}
 */
function isValid(s) {
    const stack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else {
            const last = stack.pop()
            if (s[i] !== map[last]) return false
        }
    }

    return stack.length === 0
}

console.log(isValid('()')) // true

console.log(isValid('()[]{}')) // true

console.log(isValid('(]')) // false

console.log(isValid('([)]')) // false