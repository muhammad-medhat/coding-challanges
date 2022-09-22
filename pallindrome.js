/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /**
   * Special cases:
   * All negative numbers are not palindrome
   * Also if the last digit of the number is 0
   */
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  } else {
    return sol2(x);
  }

  /**
 * 
 * public class Solution {
    public bool IsPalindrome(int x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
        return x == revertedNumber || x == revertedNumber/10;
    }
}
 */
};
const sol2 = (x) => {
  debugger;
  let revertedNumber = 0;
  while (x > revertedNumber) {
    const m = x % 10;
    revertedNumber = revertedNumber * 10 + m;
    x = Math.floor(x / 10);
  }
  // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
  // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
  // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
  return x == revertedNumber || x == Math.floor( revertedNumber / 10)
};

const sol1 = (x) => {
  /**
   * Not optimal
   */
  const arr = Array.from(x.toString());
  const rev = arr.slice().reverse();

  // console.log('rev', rev, typeof(rev));
  // console.log('arr', arr, typeof(arr))

  return arr.every((x, i) => {
    return x === rev[i];
  });
};
console.log("1211", isPalindrome(1211));
console.log("1221", isPalindrome(1221));
console.log("9999", isPalindrome(9999));
console.log("-121", isPalindrome(-121));

console.log("121", isPalindrome(121));
console.log("123", isPalindrome(123));
console.log("202", isPalindrome(202));
console.log("222", isPalindrome(222));
console.log("111", isPalindrome(111));
console.log("101", isPalindrome(101));

console.log("99", isPalindrome(99));
console.log("10", isPalindrome(10));
console.log("11", isPalindrome(11));
console.log("22", isPalindrome(22));
console.log("9", isPalindrome(9));
console.log("0", isPalindrome(0));
