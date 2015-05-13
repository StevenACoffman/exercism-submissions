module.exports = function (input) {
  'use strict';
  return (input || '').split(/\s+/).reduce(function (map, p) {
    if (!map.hasOwnProperty(p)) {
      map[p] = 1;
    } else {
      map[p]++;
    }
    return map;
  }, {});
};