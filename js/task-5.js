let country = prompt('Укажите страну для доставки товара');
let res = country.toLowerCase();
let land;
let price;

switch (res) {
  case 'китай':
    land = 'Китай';
    price = 100;
    break;

  case 'чили':
    land = 'Чили';
    price = 255;
    break;

  case 'австралия':
    land = 'Австралия';
    price = 170;
    break;

  case 'индия':
    land = 'Индия';
    price = 80;
    break;

  case 'ямайка':
    land = 'Ямайка';
    price = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

let message = `Доставка в ${land} будет стоить ${price} кредитов`;
alert(message);
