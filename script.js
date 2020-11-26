'use strict';

let current = 4;

function attemptCount(count){
    console.log(count);
     if(count <= 0){
        let start = confirm('Попытки закончились, хотите сыграть еще?');
        if(start){
            current = 4;
            guessNumber();
            console.log(start);
        } else {
            console.log(start);
        }
    } else{
        guessNumber();
    }
}


function guessNumber() {
    let numGame = 5;
    let numUser = +prompt('Угадай число от 1 до 100');
    if(numUser > 0 && numUser < numGame) {
        current--;
        alert('Загаданное число меньше, осталось попыток ' + current);
        attemptCount(current);
    } else if (numUser > numGame) {
        current--;
        alert('Загаданное число больше, осталось попыток ' + current);
        attemptCount(current);
    } else if (isNaN(numUser)) {
        current--;
        alert('Введи число! осталось попыток ' + current);
        guessNumber();
    } else if (numUser === 0) {
        alert('Игра окончена');
    } else if (numUser === numGame) {
        let finish = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if(finish){
            current = 4;
            guessNumber();
            
        } else {
            return;
        }
    }
}

guessNumber();
