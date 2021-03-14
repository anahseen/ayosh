'use strict';

let scores = [0, 0]
let activePlayer = 0;
let current = 0;
let num = 0;

//! roll dice
document.querySelector('.btn--roll').addEventListener('click', function () {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    num = randomDice;
    document.querySelector('img').setAttribute('src', `dice-${num}.png`)

    if (num > 1) {
        current += num;
        document.querySelector(`#current--${activePlayer}`).textContent = current;
    } else {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;

        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 
        activePlayer = activePlayer === 1 ? 0 : 1;
        current = 0
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 

    }
})
document.querySelector('.btn--hold').addEventListener('click', function () {
    scores[activePlayer] += current
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 

    activePlayer = activePlayer === 1 ? 0 : 1;

    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 
    current = 0;

})

document.querySelector('.btn--new').addEventListener('click', function () {
    score0 = document.querySelector('#score--0').textContent = 0;
    score1 = document.querySelector('#score--1').textContent = 0;
    currentScore0 = document.querySelector('#current--0').textContent = 0;
    currentScore1 = document.querySelector('#current--1').textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active') 
    current = 0;
})
