function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    charCount.set(t[i], (charCount.get(t[i]) || 0) - 1);
  }

  for (let value of charCount.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

/*
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
}
*/

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
