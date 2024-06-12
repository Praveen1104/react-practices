function Occurence(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

console.log(Occurence("hello"));
