game: while (true) {
    let num = Math.floor(Math.random() * 1000);
    console.log('Я загадал число:', num);
    
    let count = 1;
    
    while (true) {
        let userNum = prompt('Введите число от 0 до 1000 (q - для выхода):');
        console.log('Попытка:', count)
        console.log('Пользователь ввёл:', userNum);

        if (userNum === 'q') {
            alert('Вы вышли из игры.');
            break game;
        }
    
        if (isNaN(userNum)) {
            alert('Вы ввели не число.');
        } else if (+userNum < 0 || +userNum > 1000) {
            alert('Вы ввели не число от 0 до 1000.');
        } else {
            if (+userNum === num) {
                alert('Вы угадали! Число попыток: ' + count);
                break
            } else if (+userNum > num){
                alert('Вы не угадали. Ваше число больше загаданного.');
            } else if (+userNum < num){
                alert('Вы не угадали. Ваше число меньше загаданного.');
            }
        }

        count += 1;
    }
}

