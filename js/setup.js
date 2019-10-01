'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = setup.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = setup.querySelector('.setup-similar-list');
var similarWizardsFragment = document.createDocumentFragment();
var nameInput = document.querySelector('.setup-user-name');
var player = setup.querySelector('.setup-player');
var playerCoatColor = player.querySelector('.wizard-coat');
var playerEyeColor = player.querySelector('.wizard-eyes');
var playerFireballColor = player.querySelector('.setup-fireball-wrap');
var playerCoatColorInput = player.querySelector('input[name="coat-color"]');
var playerEyeColorInput = player.querySelector('input[name="eyes-color"]');
var playerFireballColorInput = player.querySelector('input[name="fireball-color"]');

var NUMBER_SIMILAR_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  ' да Марья',
  ' Верон',
  ' Мирабелла',
  ' Вальц',
  ' Онопко',
  ' Топольницкая',
  ' Нионго',
  ' Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballsColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomItem = function (arr) {
  return arr[getRandom(arr.length - arr.length, arr.length - 1)];
};

var getWizardsArray = function () {
  var array = [];
  for (var i = 0; i < NUMBER_SIMILAR_WIZARDS; i++) {
    var wizardName = getRandomItem(names);
    var surname = getRandomItem(surnames);
    var coatColor = getRandomItem(coatColors);
    var eyesColor = getRandomItem(eyesColors);

    array[i] = {
      name: wizardName + surname
    };
    array[i].coatColor = coatColor;
    array[i].eyesColor = eyesColor;
  }
  return array;
};

var wizards = getWizardsArray();

var createWizard = function (wizard) {
  var similarWizard = similarWizardTemplate.cloneNode(true);

  similarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  similarWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  similarWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return similarWizard;
};

var createSimilarList = function () {
  for (var j = 0; j < 4; j++) {
    similarWizardsFragment.appendChild(createWizard(wizards[j]));
  }
  similarList.appendChild(similarWizardsFragment);
};

createSimilarList();
setupSimilar.classList.remove('hidden');

nameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (target.value.length > 25) {
    target.setCustomValidity('Имя не должно превышать 25 символов');
  } else {
    target.setCustomValidity('');
  }
});

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopupHandler();
  }
};

var openPopupHandler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopupHandler = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

var focusInputHandler = function () {
  document.removeEventListener('keydown', popupEscPressHandler);
  nameInput.addEventListener('focusout', function () {
    document.addEventListener('keydown', popupEscPressHandler);
  });
};

setupOpen.addEventListener('click', openPopupHandler);

setupClose.addEventListener('click', closePopupHandler);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopupHandler();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopupHandler();
  }
});

nameInput.addEventListener('focus', focusInputHandler);

playerCoatColor.addEventListener('click', function () {
  var color = getRandomItem(coatColors);
  playerCoatColor.style.fill = color;
  playerCoatColorInput.value = color;
});

playerEyeColor.addEventListener('click', function () {
  var color = getRandomItem(eyesColors);
  playerEyeColor.style.fill = color;
  playerEyeColorInput.value = color;
});

playerFireballColor.addEventListener('click', function () {
  var color = getRandomItem(fireballsColors);
  playerFireballColor.style.background = color;
  playerFireballColorInput.value = color;
});
