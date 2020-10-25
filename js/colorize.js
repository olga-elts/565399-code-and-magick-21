'use strict';

(function () {
  const setupPlayer = document.querySelector(`.setup-player`);
  // const wizardCoat = document.querySelector(`.wizard-coat`);
  // const wizardEyes = document.querySelector(`.wizard-eyes`);
  // const wizardFireball = document.querySelector(`.setup-fireball`);
  const coatColorInput = document.querySelector(`input[name=coat-color]`);
  const eyesColorInput = document.querySelector(`input[name=eyes-color]`);
  const fireballColorInput = document.querySelector(`input[name=fireball-color]`);

  const colorizeFunctions = {
    'wizard-coat': function (element) {
      element.style.fill = window.wizard().coatColor;
      coatColorInput.value = element.style.fill;
    },
    'wizard-eyes': function (element) {
      element.style.fill = window.wizard().eyesColor;
      eyesColorInput.value = element.style.fill;
    },
    'setup-fireball': function (element) {
      element.parentNode.style.backgroundColor = window.wizard().fireballColor;
      fireballColorInput.value = element.parentNode.style.backgroundColor;
    }
  };

  setupPlayer.addEventListener(`click`, function (evt) {
    for (let key in colorizeFunctions) {
      if (evt.target.classList.contains(key)) {
        colorizeFunctions[key](evt.target);
      }
    }
  });
})();
