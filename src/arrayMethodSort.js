'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    for (let i = 0; i < this.length - 1; ++i) {
      for (let j = 0; j < this.length - i - 1; ++j) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

function stringCompare(a, b) {
  return String(a) > String(b) ? 1 : -1;
}

module.exports = applyCustomSort;
