/**
 * Encodes a list of strings into a single string.
 * @param {string[]} strs - The list of strings to encode.
 * @returns {string} The encoded string.
 */
function encode(strs) {
    const delimiter = '#';
    return strs.map(str => str.length + delimiter + str).join('');
}

/**
 * Decodes a single string back into a list of strings.
 * @param {string} str - The encoded string.
 * @returns {string[]} The list of decoded strings.
 */
function decode(str) {
    const delimiter = '#';
    const result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== delimiter) {
            j++;
        }
        const length = parseInt(str.substring(i, j), 10);
        const word = str.substring(j + 1, j + 1 + length);
        result.push(word);
        i = j + 1 + length;
    }

    return result;
}

// Example usage:
const encoded = encode(["we", "say", ":", "yes"]);
console.log(encoded);  

const decoded = decode(encoded);
console.log(decoded);  
