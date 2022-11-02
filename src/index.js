console.log(process.argv)
const input = process.argv[2];

function Palindrome(input) {
    const len = input.length - 1;
    for (let i = 0; i < len / 2; i++) {
      let x = input[i];
      let y = input[len - i];
      if (x != y) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  console.log(Palindrome(input));
