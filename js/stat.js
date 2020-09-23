'use strict';

const CLOUD = {
  startX: 100,
  startY: 10,
  width: 420,
  height: 270,
  radius: 20,
  color: `#fff`
};

const SHADOW = {
  shift: 10,
  color: `rgba(0, 0, 0, 0.7)`
};

const BAR = {
  startX: 140,
  startY: 245,
  width: 40,
  maxHeight: 150,
  gap: 50,
  mainColor: `rgba(255, 0, 0, 1)`
};

const TEXT = {
  startX: 120,
  startY: 30,
  font: `16px PT Mono`,
  color: `#000`,
  baseline: `hanging`,
  lineHeight: 16,
  lineGap: 5
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
  renderCloud(ctx, CLOUD.startX + SHADOW.shift, CLOUD.startY + SHADOW.shift, CLOUD.width, CLOUD.height, CLOUD.radius, SHADOW.color);
  renderCloud(ctx, CLOUD.startX, CLOUD.startY, CLOUD.width, CLOUD.height, CLOUD.radius, CLOUD.color);
  writeText(ctx, TEXT.startX, TEXT.startY, TEXT.font, TEXT.baseline, TEXT.color, `Ура, вы победили!`);
  writeText(ctx, TEXT.startX, TEXT.startY + TEXT.lineHeight, TEXT.font, TEXT.baseline, TEXT.color, `Список результатов:`);

  const maxTime = getMaxElement(times);

  players.forEach(function (player, i) {
    let barColor = getRandomBlue();
    if (player === `Вы`) {
      barColor = BAR.mainColor;
    }
    const barHeight = BAR.maxHeight * times[i] / maxTime;
    renderBar(ctx, BAR.startX + (BAR.width + BAR.gap) * i, BAR.startY - barHeight, BAR.width, barHeight, barColor);
    writeText(ctx, BAR.startX + (BAR.width + BAR.gap) * i, BAR.startY + TEXT.lineGap, TEXT.font, TEXT.baseline, TEXT.color, players[i]);
    writeText(ctx, BAR.startX + (BAR.width + BAR.gap) * i, BAR.startY - barHeight - TEXT.lineHeight - TEXT.lineGap, TEXT.font, TEXT.baseline, TEXT.color, Math.round(times[i]));
  });
};
