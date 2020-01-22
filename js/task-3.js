const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Введите пароль');
console.log(password);

if (password === ADMIN_PASSWORD) {
  message = ('Добро пожаловать!');
  alert(message);
} 
else if (password === null) {
    message = ('Отменено пользователем!');
    alert(message);
  }
else if (password != false) {
  message = ('Доступ запрещен, неверный пароль!');
  alert(message);
} 

