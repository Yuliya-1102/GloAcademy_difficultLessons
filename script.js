'use strict';

let current = 10;


function rondomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numGame = Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(numGame);
		
    function guessNumber(numGame) {
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
            attemptCount(current);
        } else if (numUser === 0) {
            alert('Игра окончена!');
        } else if (numUser === numGame) {
            let finish = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if(finish){
              current = 10;
              rondomNumber(min, max);
            } else {
							alert('Игра окончена!');
              return;
            }
					}
		}
		guessNumber(numGame);
		
		function attemptCount(count){
			console.log(count);
			if(count <= 0){
					let start = confirm('Попытки закончились, хотите сыграть еще?');
					if(start){
						current = 10;
						rondomNumber(min, max);
						console.log(start);
					} else {
						alert('Игра окончена!');
						return;
					}
			} else{
					guessNumber(numGame);
			}
		}
}

rondomNumber(1, 100);

