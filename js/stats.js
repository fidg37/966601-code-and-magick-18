'use strict';

var CLOUD_WIDTH = 450;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 125;
var CLOUD_Y = 70;
var MAIN_COLOR = '#FDF5E6';
var BACKGROUND_COLOR = 'gainsboro';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';

var createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var createBasement = function (ctx, color) {
  var basementGapX = CLOUD_WIDTH * 0.05;
  var basementGapY = CLOUD_HEIGHT * 0.15;

  ctx.beginPath();
  ctx.moveTo(CLOUD_X - basementGapX, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + basementGapX, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + basementGapX, CLOUD_Y + CLOUD_HEIGHT + basementGapY);
  ctx.lineTo(CLOUD_X - basementGapX, CLOUD_Y + CLOUD_HEIGHT + basementGapY);
  ctx.lineTo(CLOUD_X - basementGapX, CLOUD_Y + CLOUD_HEIGHT);
  ctx.closePath();

  if (color) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var createColumn = function (ctx, color, gap) {
  var columnBaseGap = CLOUD_WIDTH * 0.025;
  var columnTopGap = CLOUD_WIDTH * 0.02;
  var columnHeightGap = CLOUD_HEIGHT * 0.05;
  var columnEdgeBaseGap = CLOUD_WIDTH * 0.014;
  var columnEdgeTopGap = CLOUD_WIDTH * 0.01;

  ctx.beginPath();
  ctx.moveTo(CLOUD_X + gap - columnBaseGap, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap - columnTopGap, CLOUD_Y + columnHeightGap);
  ctx.lineTo(CLOUD_X + gap - columnBaseGap, CLOUD_Y);
  ctx.lineTo(CLOUD_X + gap + columnBaseGap, CLOUD_Y);
  ctx.lineTo(CLOUD_X + gap + columnTopGap, CLOUD_Y + columnHeightGap);
  ctx.lineTo(CLOUD_X + gap + columnBaseGap, CLOUD_Y + CLOUD_HEIGHT);
  ctx.moveTo(CLOUD_X + gap + columnEdgeBaseGap, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap + columnEdgeTopGap, CLOUD_Y + columnHeightGap);
  ctx.moveTo(CLOUD_X + gap, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap, CLOUD_Y + columnHeightGap);
  ctx.moveTo(CLOUD_X + gap - columnEdgeBaseGap, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(CLOUD_X + gap - columnEdgeTopGap, CLOUD_Y + columnHeightGap);
  ctx.moveTo(CLOUD_X + gap + columnTopGap, CLOUD_Y + columnHeightGap);
  ctx.lineTo(CLOUD_X + gap - columnTopGap, CLOUD_Y + columnHeightGap);
  ctx.closePath();

  if (color) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var createRoof = function (ctx, color) {
  var roofGapX = CLOUD_WIDTH * 0.035;
  var roofGapY = CLOUD_HEIGHT * 0.1;
  var roofCenterX = CLOUD_X + CLOUD_WIDTH / 2;
  var roofCenterY = CLOUD_Y - CLOUD_HEIGHT * 0.25;

  ctx.beginPath();
  ctx.moveTo(CLOUD_X - roofGapX, CLOUD_Y);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + roofGapX, CLOUD_Y);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + roofGapX, CLOUD_Y);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + roofGapX, CLOUD_Y - roofGapY);
  ctx.lineTo(roofCenterX, roofCenterY);
  ctx.lineTo(CLOUD_X - roofGapX, CLOUD_Y - roofGapY);
  ctx.lineTo(CLOUD_X - roofGapX, CLOUD_Y);
  ctx.closePath();

  if (color) {
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = CLOUD_WIDTH * 0.035 + 'px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', roofCenterX - roofCenterX / 4.5, roofCenterY + roofCenterY * 0.7);
    ctx.fillText('Список результатов:', roofCenterX - roofCenterX / 4, roofCenterY + roofCenterY * 1.5);
  } else {
    ctx.stroke();
  }
};

var createFlag = function (ctx, name, time, gap, maxTime) {
  var flagStartX = CLOUD_X + CLOUD_WIDTH * 0.1;
  var flagWidth = CLOUD_WIDTH * 0.15;
  var flagBaseGup = flagWidth * 0.1;
  var maxFlagLength = CLOUD_HEIGHT * 0.7;
  var flagGapY = CLOUD_HEIGHT * 0.05;
  var flagHeight = (time * maxFlagLength) / maxTime;

  ctx.beginPath();
  ctx.moveTo(flagStartX + gap + flagWidth / 2 - flagBaseGup, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(flagStartX + gap + flagWidth / 2 - flagBaseGup, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap, CLOUD_Y + flagBaseGup);
  ctx.lineTo(flagStartX + gap + flagWidth, CLOUD_Y + flagBaseGup);
  ctx.lineTo(flagStartX + gap + flagWidth, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap + flagWidth / 2 + flagBaseGup, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap + flagWidth / 2 + flagBaseGup, CLOUD_Y + CLOUD_HEIGHT);
  ctx.lineTo(flagStartX + gap + flagWidth / 2 - flagBaseGup, CLOUD_Y + CLOUD_HEIGHT);
  ctx.stroke();
  ctx.fillStyle = 'gold';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(flagStartX + gap, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap + flagWidth, CLOUD_Y + flagBaseGup * 4);
  ctx.lineTo(flagStartX + gap + flagWidth, CLOUD_Y + flagBaseGup * 4 + flagHeight);
  ctx.lineTo(flagStartX + gap + flagWidth / 2, CLOUD_Y + flagBaseGup * 4 + flagHeight - flagGapY);
  ctx.lineTo(flagStartX + gap, CLOUD_Y + flagBaseGup * 4 + flagHeight);
  ctx.lineTo(flagStartX + gap, CLOUD_Y + flagBaseGup * 4);
  ctx.stroke();
  ctx.closePath();

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, 70%, ' + Math.floor(Math.random() * 50) + '%)';
  }
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = flagBaseGup * 3 + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(name, flagStartX + gap, CLOUD_Y + flagBaseGup + flagBaseGup * 0.25);
  ctx.fillText(time, flagStartX + gap, CLOUD_Y + CLOUD_HEIGHT + flagBaseGup + flagBaseGup * 0.25);
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

window.renderStatistics = function (ctx, names, times) {
  createCloud(ctx, CLOUD_X, CLOUD_Y, BACKGROUND_COLOR);
  createColumn(ctx, SHADOW_COLOR, 5);
  createColumn(ctx, MAIN_COLOR, 0);
  createColumn(ctx, false, 0);
  createColumn(ctx, MAIN_COLOR, CLOUD_WIDTH);
  createColumn(ctx, false, CLOUD_WIDTH);
  createBasement(ctx, MAIN_COLOR);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var flagGup = CLOUD_WIDTH * 0.22;

    createFlag(ctx, names[i], Math.floor(times[i]), flagGup * (i), Math.floor(maxTime));
  }

  createBasement(ctx);
  createRoof(ctx, MAIN_COLOR);
  createRoof(ctx);
};
