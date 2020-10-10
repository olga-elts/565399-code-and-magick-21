'use strict';

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
  ]
};

const WIZARDS_NUMBER = 4;

const setupWindow = document.querySelector(`.setup`);
setupWindow.classList.remove(`hidden`);

const setupSimilar = setupWindow.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

/**
 * Выбирает рандомный элемент из массива
 * @param {Array} array -  случайный массив
 * @return {*} - случайный элемент массива
 */
const getRandomElement = function (array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
};

/**
 * Возвращает массив магов с рандомными именем, фамилией, цветом глаз, цветом плаща
 * @param {number} wizardsNumber -  число (количество) магов
 * @return {Array} массив магов
 */
const getWizardsArray = function (wizardsNumber) {
  let wizards = [];
  for (let i = 0; i < wizardsNumber; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomElement(Wizard.NAMES) + ` ` + getRandomElement(Wizard.SURNAMES);
    wizards[i].coatColor = getRandomElement(Wizard.COAT_COLORS);
    wizards[i].eyesColor = getRandomElement(Wizard.EYES_COLORS);
  }
  return wizards;
};

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

/**
 * Отрисовывает мага в склонированный шаблон, используя данные (имя, фамилия, цвет глаз, цвет плаща) из массива магов
 * @param {Object} wizard - элемент массива магов
 * @return {Object} фрагмент кода HTML
 */
const renderWizard = function (wizard) {
  let similarWizard = similarWizardTemplate.cloneNode(true);

  similarWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
  similarWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  similarWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return similarWizard;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < getWizardsArray(WIZARDS_NUMBER).length; i++) {
  fragment.appendChild(renderWizard(getWizardsArray(WIZARDS_NUMBER)[i]));
}

const similarList = setupSimilar.querySelector(`.setup-similar-list`);
similarList.appendChild(fragment);
