let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNumber() {
    // создаем счетчик
    let count = 3;
    let num = Math.floor(Math.random() * 100);
    console.log(num);

    function startGame() {
        function checkCount() {
            if (confirm('Попытки закончились, хотите попробовать еще раз?')) {
                count = 3;
                startGame();
            } else {
                // если нажали отмену
                alert('Игра окончена');
            }
        }
        // задаем вопрос
        numFromUser = prompt('Введи число!');
        if (numFromUser === null) {
            alert('Игра окончена');
        } else if (!isNumber(numFromUser)) {
            startGame();

            // если введенное число больше загаданного
        } else if (+numFromUser > num) {
            count--;
            if (count === 0) {
                checkCount();
            } else {
                alert('Загаданное число меньше у вас осталось ' + count + ' попыток');
                startGame();
            }
            // если введенное число меньше загаданного
        } else if (+numFromUser < num) {
            count--;
            if (count === 0) {
                checkCount();
            } else {
                alert('Загаданное число больше у вас осталось ' + count + ' попыток');
                startGame();
            }
            // если число равно загаданному
        } else if (+numFromUser === num) {
            alert('Поздравляю, Вы угадали!!!');
            if (confirm('Хотите попробовать еще раз?')) {
                count = 3;
                getNumber()
            }
        }
    }
    startGame()
}

getNumber();


