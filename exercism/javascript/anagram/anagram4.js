//http://exercism.io/submissions/c80211ce8a0daa24a1f8bad1
'use strict';
var Anagram = function (word) {

  function textSort(text) {
    return text.toLowerCase().split('').sort().join('');
  }

  var base = textSort(word),
    low = word.toLowerCase();

  return {
    matches: function () {
      var args = Array.prototype.slice.call(arguments),
        list = Array.isArray(args[0]) ? args[0] : args;

      return list.filter(function (elem) {
        return elem.toLowerCase() !== low && textSort(elem) === base;
      });
    }
  };
};

module.exports = Anagram;