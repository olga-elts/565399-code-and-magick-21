'use strict';

(function () {
  window.util = {
    getRandomElement(array) {
      return array[Math.floor(Math.random() * Math.floor(array.length))];
    }
  };
})();
