let total = 0;
let input = +prompt('Введите число');

while (input) {
    total += input;
    input = +prompt();
}
alert(`Общая сумма чисел равна ${total}`);


