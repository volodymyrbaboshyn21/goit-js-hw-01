let credits = 23580;
let pricePerDroid = 3000;
let message;

const buy = prompt('Сколько дроидов вы хотите купить?');
console.log(buy);

if (buy === null) {
  message = 'Отменено пользователем';
  alert(message);
}

if (buy !== null ) {
  let totalPrice = buy * pricePerDroid;
  if (totalPrice <= credits) {
    let balance = credits - totalPrice;
    message = `Вы купили ${buy} дроидов, на счету осталось ${balance} кредитов.`;
    alert(message);
    
  }
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    alert(message);
  }
}
