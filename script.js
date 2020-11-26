// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".

// —  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function getNumber(num) {
    // создаем счетчик
    let count = 10
    return startGame = () => {
        // задаем вопрос
        numFromUser = prompt('Введи число!')
        if (!numFromUser) {
            alert('Игра окончена')
        } else if (!isNumber(numFromUser)) {
            startGame()
        } else if (numFromUser > num) {
            count--
            if (count === 0) {
                let again = confirm('Попытки закончились, хотите попробовать еще раз?')
                if (again) {
                    count = 10
                    startGame()
            } {
                return
            }

        } else {
            alert('Загаданное число меньше у вас осталось ' + count + ' попыток')
            startGame()
        }


    } else if (numFromUser < num) {
        count--
        if (count === 0) {
            let again = confirm('Попытки закончились, хотите попробовать еще раз?')
            if (again) {
                count = 10
                startGame()
            } {
                return
            }

        } else {
            alert('Загаданное число больше у вас осталось ' + count + ' попыток')
            startGame()
        }

    } else if (numFromUser == num) {
        alert('Поздравляю, Вы угадали!!!')
    }
}

}

const startGame1 = getNumber(50)

startGame()