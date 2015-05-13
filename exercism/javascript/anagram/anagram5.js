//http://exercism.io/submissions/e3f3242e123d57d10c0b7d67
module.exports = function () {
  'use strict';

  function sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  function anagram(arg) {
    var subject = {},
      word = arg,
      sortedWord = sortWord(arg);
    subject.matches = function (inputArr) {
      var outputArr = [];
      if (typeof inputArr === 'string') {
        inputArr = Array.prototype.slice.call(arguments);
      }
      for (var i = 0; i < inputArr.length; i++) {
        var testWord = sortWord(inputArr[i]);
        if (sortedWord === testWord && word.toLowerCase() !== inputArr[i].toLowerCase()) {
          outputArr.push(inputArr[i]);
        }
      }
      return outputArr;
    };
    return subject;
  }
  return anagram;
}();