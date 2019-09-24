'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var BACKGROUND_COLOR = 'white';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
var FONT_SIZE = 16 + 'px';
var FONT_STYLE = ' PT Mono';
var FONT_GAP = 15;

var createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

var createStatColumn = function (ctx, height, gap, name, time) {
  ctx.beginPath();
  ctx.moveTo(CLOUD_X + gap + COLUMN_GAP, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap + COLUMN_GAP, CLOUD_Y + CLOUD_HEIGHT - height);
  ctx.lineTo(CLOUD_X + gap + COLUMN_GAP + COLUMN_WIDTH, CLOUD_Y + CLOUD_HEIGHT - height);
  ctx.lineTo(CLOUD_X + gap + COLUMN_GAP + COLUMN_WIDTH, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap + COLUMN_GAP, CLOUD_Y + CLOUD_HEIGHT);
  ctx.closePath();

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, 70%, ' + Math.floor(Math.random() * 50) + '%)';
  }
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = FONT_SIZE + FONT_STYLE;
  ctx.fillText(name, CLOUD_X + gap + COLUMN_GAP, CLOUD_Y + CLOUD_HEIGHT - height - FONT_GAP * 2);
  ctx.fillText(Math.floor(time), CLOUD_X + gap + COLUMN_GAP, CLOUD_Y + CLOUD_HEIGHT - height - FONT_GAP);

};

window.renderStatistics = function (ctx, names, times) {
  var gap = 0;
  var maxTime = getMaxElement(times);

  createCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  createCloud(ctx, CLOUD_X, CLOUD_Y, BACKGROUND_COLOR);

  for (var i = 0; i < names.length; i++) {
    createStatColumn(ctx, times[i] * COLUMN_MAX_HEIGHT / maxTime, gap, names[i], times[i]);
    gap += (COLUMN_GAP + COLUMN_WIDTH);
  }

  ctx.fillStyle = 'black';
  ctx.font = FONT_SIZE + FONT_STYLE;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 3);
};
