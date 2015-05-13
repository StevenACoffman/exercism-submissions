//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isShouting(input) {
  'use strict';
  return (input === input.toUpperCase() && input !== input.toLowerCase());
}

function isSilence(input) {
  'use strict';
  return (input.trim().length === 0);
}

function isQuestion(input) {
  'use strict';
  return (input.substr(-1) === '?');
}

var Bob = function () {};

Bob.prototype.hey = function (input) {
  'use strict';
  if (isSilence(input)) {
    return 'Fine. Be that way!';
  } else if (isShouting(input)) {
    return 'Whoa, chill out!';
  } else if (isQuestion(input)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }

};


module.exports = Bob;