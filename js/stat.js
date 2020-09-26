'use strict';

const Cloud = {
  START_X: 100,
  START_Y: 10,
  WIDTH: 420,
  HEIGHT: 270,
  RADIUS: 20,
  COLOR: `#fff`
};

const Shadow = {
  SHIFT: 10,
  COLOR: `rgba(0, 0, 0, 0.7)`
};

const Bar = {
  START_X: 140,
  START_Y: 245,
  WIDTH: 40,
  MAX_HEIGHT: 150,
  GAP: 50,
  MAIN_COLOR: `rgba(255, 0, 0, 1)`
};

const Text = {
  START_X: 120,
  START_Y: 30,
  FONT: `16px PT Mono`,
  COLOR: `#000`,
  BASELINE: `hanging`,
  LINE_HEIGHT: 16,
  LINE_GAP: 5
};

const renderCloud = function (ctx, x, y, width, height, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.stroke();
  ctx.fill();
};

const getRandomBlue = function () {
  const s = Math.floor(Math.random() * 100) + 1;
  return `hsl(240, ` + s + `%, 50%)`;
};

const renderBar = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const writeText = function (ctx, x, y, font, baseline, color, text) {
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

const getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, Cloud.START_X + Shadow.SHIFT, Cloud.START_Y + Shadow.SHIFT, Cloud.WIDTH, Cloud.HEIGHT, Cloud.RADIUS, Shadow.COLOR);
  renderCloud(ctx, Cloud.START_X, Cloud.START_Y, Cloud.WIDTH, Cloud.HEIGHT, Cloud.RADIUS, Cloud.COLOR);
  writeText(ctx, Text.START_X, Text.START_Y, Text.FONT, Text.BASELINE, Text.COLOR, `Ура, вы победили!`);
  writeText(ctx, Text.START_X, Text.START_Y + Text.LINE_HEIGHT, Text.FONT, Text.BASELINE, Text.COLOR, `Список результатов:`);

  const maxTime = getMaxElement(times);

  players.forEach(function (player, i) {
    let barColor = getRandomBlue();
    if (player === `Вы`) {
      barColor = Bar.MAIN_COLOR;
    }
    const barHeight = Bar.MAX_HEIGHT * times[i] / maxTime;
    renderBar(ctx, Bar.START_X + (Bar.WIDTH + Bar.GAP) * i, Bar.START_Y - barHeight, Bar.WIDTH, barHeight, barColor);
    writeText(ctx, Bar.START_X + (Bar.WIDTH + Bar.GAP) * i, Bar.START_Y + Text.LINE_GAP, Text.FONT, Text.BASELINE, Text.COLOR, players[i]);
    writeText(ctx, Bar.START_X + (Bar.WIDTH + Bar.GAP) * i, Bar.START_Y - barHeight - Text.LINE_HEIGHT - Text.LINE_GAP, Text.FONT, Text.BASELINE, Text.COLOR, Math.round(times[i]));
  });
};
