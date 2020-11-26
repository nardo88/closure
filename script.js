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
    
    return startGame = () => {
        // задаем вопрос
        numFromUser = prompt('Введи число!') 

        if (numFromUser === null){
            alert('Игра окончена')
        } else if (!isNumber(numFromUser)){
            startGame()
        } else if (+numFromUser > num){
            alert('Загаданное число меньше')
            startGame()
    
        } else if (+numFromUser < num){
            alert('Загаданное число больше')
            startGame()
        } else if (+numFromUser === num){
            alert('Поздравляю, Вы угадали!!!')
        }
    }
    
}

// создаем число от 1 до 100
let randomNumber = Math.floor(Math.random() * 100)
// что бы угадать
console.log(randomNumber);

const startGame1 = getNumber(randomNumber)
startGame1()

