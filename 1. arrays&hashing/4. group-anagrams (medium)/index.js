/*
function groupAnagrams(strs) {
    let anagramGroup = new Map()
    
    for (let i = 0; i < strs.length; i++) {
        let current = strs[i]
        let sorted = current.split("").sort().join("")
        
        if (!anagramGroup.has(sorted)) {
            anagramGroup.set(sorted, [])
        }

        anagramGroup.get(sorted).push(current)
    }
    console.log(anagramGroup)
    // console.log([...anagramGroup.values()])
    // console.log(anagramGroup.values())
    // console.log(Array.from(anagramGroup.values()))
    
    return [...anagramGroup.values()]
    
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))

const map = new Map([
    ['key1', ['eat', 'tea', 'ate']],
    ['key2', ['tan', 'nat']],
    ['key3', ['bat']]
]);
console.log(map)
// Convert the values of the map to an array
console.log(Array.from(map.values()));
*/

function groupAnagrams(strs) {
    let anagramGroup = new Map();
    
    for (let str of strs) {
        let freq = Array(26).fill(0);
        console.log(freq)
        for (let char of str) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let key = freq.join('#');
        console.log(key)
        
        if (!anagramGroup.has(key)) {
            anagramGroup.set(key, []);
        }
        anagramGroup.get(key).push(str);
    }
    
    return [...anagramGroup.values()];
}

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
