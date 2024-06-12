function stringCreated(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};
  for (let val of str1) {
    freq[val] = (freq[val] || 0) + 1;
  }

  for (let val of str2) {
    if (freq[val]) {
      freq[val] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(stringCreated("anagram", "nagaram"));
