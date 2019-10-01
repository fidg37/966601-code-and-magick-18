'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = setup.querySelector('.setup-similar-list');
var similarWizardsFragment = document.createDocumentFragment();

setup.classList.remove('hidden');

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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

var wizards = [
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardName = names[getRandom(0, names.length)];
  var surname = surnames[getRandom(0, surnames.length)];
  var coatColor = coatColors[getRandom(0, coatColors.length)];
  var eyesColor = eyesColors[getRandom(0, eyesColors.length)];

  wizards[i].name = wizardName + surname;
  wizards[i].coatColor = coatColor;
  wizards[i].eyesColor = eyesColor;
}

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
