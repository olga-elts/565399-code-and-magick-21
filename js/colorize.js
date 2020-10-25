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
      const coatColor = window.wizard().coatColor;
      element.style.fill = coatColor;
      coatColorInput.value = coatColor;
    },
    'wizard-eyes': function (element) {
      const eyesColor = window.wizard().eyesColor;
      element.style.fill = eyesColor;
      eyesColorInput.value = eyesColor;
    },
    'setup-fireball': function (element) {
      const fireballColor = window.wizard().fireballColor;
      element.parentNode.style.backgroundColor = fireballColor;
      fireballColorInput.value = fireballColor;
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
