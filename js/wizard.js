'use strict';

(function () {
  const Wizard = {
    NAMES: [
      `Иван`,
      `Хуан Себастьян`,
      `Мария`, `Кристоф`,
      `Виктор`,
      `Юлия`,
      `Люпита`,
      `Вашингтон`
    ],
    SURNAMES: [
      `да Марья`,
      `Верон`,
      `Мирабелла`,
      `Вальц`,
      `Онопко`,
      `Топольницкая`,
      `Нионго`,
      `Ирвинг`
    ],
    COAT_COLORS: [
      `rgb(101, 137, 164)`,
      `rgb(241, 43, 107)`,
      `rgb(146, 100, 161)`,
      `rgb(56, 159, 117)`,
      `rgb(215, 210, 55)`,
      `rgb(0, 0, 0)`
    ],
    EYES_COLORS: [
      `black`,
      `red`,
      `blue`,
      `yellow`,
      `green`
    ],
    FIREBALL_COLORS: [
      `#ee4830`,
      `#30a8ee`,
      `#5ce6c0`,
      `#e848d5`,
      `#e6e848`
    ]
  };

  window.wizard = function () {
    const wizard = {
      name: window.util.getRandomElement(Wizard.NAMES) + ` ` + window.util.getRandomElement(Wizard.SURNAMES),
      coatColor: window.util.getRandomElement(Wizard.COAT_COLORS),
      eyesColor: window.util.getRandomElement(Wizard.EYES_COLORS),
      fireballColor: window.util.getRandomElement(Wizard.FIREBALL_COLORS),
    };
    return wizard;
  };
})();
