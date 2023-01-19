const string = "ali";

function reverseString(str) {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}

const isPalindrome = function (string) {
  const reversed = reverseString(string);
  return reversed == string
    ? `${string} bir palindrome texttir.`
    : `${string} bir palindrome text değildir.`;
};

console.log(isPalindrome(string));
