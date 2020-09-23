'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATCOLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYESCOLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const setupWindow = document.querySelector(`.setup`);
setupWindow.classList.remove(`hidden`);

const setupSimilar = setupWindow.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

const similarList = setupSimilar.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomElement = function (array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
};

let wizards = [];

const renderWizardsArray = function (wizardsNumber) {
  for (let i = 0; i < wizardsNumber; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomElement(WIZARD_NAMES) + ` ` + getRandomElement(WIZARD_SURNAMES);
    wizards[i].coatColor = getRandomElement(WIZARD_COATCOLORS);
    wizards[i].eyesColor = getRandomElement(WIZARD_EYESCOLORS);
  }
  return wizards;
};

renderWizardsArray(4);

const renderWizard = function (wizard) {
  let similarWizard = similarWizardTemplate.cloneNode(true);

  similarWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
  similarWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  similarWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return similarWizard;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarList.appendChild(fragment);
