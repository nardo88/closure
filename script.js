// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".

// —  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function getNumber (num){
    let count = 10
    return startGame = (numFromUser) => {
        if (!isNumber(numFromUser) ){
            numFromUser = prompt('Введи число!')
            numFromUser ? startGame(numFromUser) 
                : alert('Игра окончена')
        } else if (numFromUser > num ){
            count--
            alert('Загаданное число меньше, у вас осталось ' + count + ' попыток')
            if (count === 0) {
                alert('Попытки закончились')
            } else {
                numFromUser = prompt('Введи число!')
                numFromUser ? startGame(numFromUser) : alert('Игра окончена')
            }
        } else if (numFromUser < num){
            count--
            alert('Загаданное число меньше, у вас осталось ' + count + ' попыток')
            if (count === 0) {
                let again = confirm('Попытки закончились, хотите попробовать еще раз?')
                    if (again){
                        count = 10
                        startGame(prompt('Угадай число от 1 до 100'))
                    }{
                        return
                    }
                     
            } else {
                numFromUser = prompt('Введи число!')
                numFromUser ? startGame(numFromUser) : alert('Игра окончена')
            }
        } else if (numFromUser = num){
            alert('Поздравляю, Вы угадали!!!')
        }
    }
    
}

const startGame1 = getNumber(50)

startGame(prompt('Угадай число от 1 до 100'))

