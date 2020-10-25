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
  ],
  FIREBALL_COLORS: [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ]
};

const WIZARDS_NUMBER = 4;

const setupWindow = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setupWindow.querySelector(`.setup-close`);

/**
 * Закрывает окно настроек при нажатии кнопки Esc
 * @param {event} evt - событие
 */
const onSetupWindowEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closeSetupWindow();
  }
};

/**
 * Открывает окно настроек, добавляет слушитель события keydown
 * @param {event} evt - событие
 */
const openSetupWindow = function () {
  setupWindow.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onSetupWindowEscPress);
};

/**
 * Закрывает окно настроек, удаляет слушитель события keydown
 * @param {event} evt - событие
 */
const closeSetupWindow = function () {
  setupWindow.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onSetupWindowEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openSetupWindow();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openSetupWindow();
  }
});

setupClose.addEventListener(`click`, function () {
  closeSetupWindow();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closeSetupWindow();
  }
});

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

const wizards = getWizardsArray(WIZARDS_NUMBER);

/**
 * Создает фрагмент документа, заполняет его DOM-элементами и присоединяет к основному дереву
 * @param {Array} elements - массив DOM-элементов
 */
const appendFragment = function (elements) {
  const fragment = document.createDocumentFragment();
  const similarList = setupSimilar.querySelector(`.setup-similar-list`);
  elements.forEach(function (element) {
    fragment.appendChild(renderWizard(element));
  });
  similarList.appendChild(fragment);
};

appendFragment(wizards);

const setupPlayer = document.querySelector(`.setup-player`);
// const wizardCoat = document.querySelector(`.wizard-coat`);
// const wizardEyes = document.querySelector(`.wizard-eyes`);
// const wizardFireball = document.querySelector(`.setup-fireball`);
const coatColorInput = document.querySelector(`input[name=coat-color]`);
const eyesColorInput = document.querySelector(`input[name=eyes-color]`);
const fireballColorInput = document.querySelector(`input[name=fireball-color]`);

const colorizeFunctions = {
  'wizard-coat': function (element) {
    element.style.fill = getRandomElement(Wizard.COAT_COLORS);
    coatColorInput.value = getRandomElement(Wizard.COAT_COLORS);
  },
  'wizard-eyes': function (element) {
    element.style.fill = getRandomElement(Wizard.COAT_COLORS);
    eyesColorInput.value = getRandomElement(Wizard.EYES_COLORS);
  },
  'setup-fireball': function (element) {
    element.parentNode.style.backgroundColor = getRandomElement(Wizard.FIREBALL_COLORS);
    fireballColorInput.value = getRandomElement(Wizard.FIREBALL_COLORS);
  }
};

setupPlayer.addEventListener(`click`, function (evt) {
  for (let key in colorizeFunctions) {
    if (evt.target.classList.contains(key)) {
      colorizeFunctions[key](evt.target);
    }
  }
});
