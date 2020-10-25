'use strict';

(function () {
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
})();
