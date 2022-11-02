function Palindrome(input) {
  const j = input.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = input[i];
    let y = input[j - i];
    if (x != y) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(Palindrome("abac"));
