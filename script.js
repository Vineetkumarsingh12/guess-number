'use strict';
let secretNumber = Math.floor(Math.random() * 20);
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20);
  //   document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (score > 0) {
    if (guess > secretNumber) {
      displayMessage('📈too high');
    } else if (guess < secretNumber) {
      displayMessage('📉 too low');
    }
    score--;
  } else {
    displayMessage('💥 you loss');
  }

  document.querySelector('.score').textContent = score;
});
