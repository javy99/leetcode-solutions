function isPalindrome(s) {
    // Helper function to check if a character is alphanumeric
    function isAlphanumeric(c) {
        return /[a-zA-Z0-9]/.test(c);
    }

    // Convert the string to lowercase
    s = s.toLowerCase();

    // Initialize two pointers
    let left = 0;
    let right = s.length - 1;

    // Move the two pointers towards each other
    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare the characters at left and right pointers
        if (s[left] !== s[right]) {
            return false;
        }

        // Move the pointers inward
        left++;
        right--;
    }

    // If we haven't returned false, the string is a palindrome
    return true;
}

/*
function isPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    let filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the filtered string
    let reversedStr = filteredStr.split('').reverse().join('');

    // Compare the filtered string with the reversed string
    return filteredStr === reversedStr;
}
*/


const testCases = [
    "A man, a plan, a canal: Panama", // Expected: true
    "race a car",                     // Expected: false
    " ",                              // Expected: true
    "madam",                          // Expected: true
    "No 'x' in Nixon"                 // Expected: true
];

for (let i = 0; i < testCases.length; i++) {
    const input = testCases[i];
    const result = isPalindrome(input);
    console.log(`Test Case ${i + 1}: "${input}" => ${result}`);
}