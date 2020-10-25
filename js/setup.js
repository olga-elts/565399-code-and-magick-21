'use strict';

(function () {
  const WIZARDS_NUMBER = 4;

  const setupWindow = document.querySelector(`.setup`);
  const setupSimilar = setupWindow.querySelector(`.setup-similar`);
  setupSimilar.classList.remove(`hidden`);

  /**
   * Возвращает массив магов с рандомными именем, фамилией, цветом глаз, цветом плаща
   * @param {number} wizardsNumber -  число (количество) магов
   * @return {Array} массив магов
   */
  const getWizardsArray = function (wizardsNumber) {
    let wizards = [];
    for (let i = 0; i < wizardsNumber; i++) {
      wizards[i] = window.wizard();
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
})();
