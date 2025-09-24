function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');

  if( cleanedStr === reversedStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("Racecar"));