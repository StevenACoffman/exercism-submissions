//http://exercism.io/submissions/bf65d03357cd6c2ad07da535
'use strict';
var original, matcher;
// Sorts the letters in a word for easy comparison
function simplify(word) {
    return word.split('').sort().join('');
  }
  // Returns an array of matching words
function matches(list) {
  // Check for string arguments
  if (typeof list === 'string') {
    list = Array.prototype.slice.call(arguments);
  }
  return list.filter(function (test) {
    var testLcase = test.toLowerCase();
    return simplify(testLcase) === matcher && testLcase !== original;
  });
}
module.exports = function (word) {
  original = word.toLowerCase();
  matcher = simplify(original);
  return {
    matches: matches
  };
};