let money = prompt('Сколько у вас денег?');
let apple = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов хлеба?');
let applePrice = prompt('Сколько стоит одно яблоко?') * apple;
let breadPrice = prompt('Сколько стоит один батон хлеба?') * bread;
let total = applePrice+breadPrice <= money;

function haveEnough(money, apple, bread, applePrice, breadPrice, total) {
	if (total == true) {
		return 'Вам хватает денег'
	}else {
		return 'Вам не хватает денег'
	}
}
console.log(haveEnough(money, apple, bread, applePrice, breadPrice, total));