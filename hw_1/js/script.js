let money = prompt('Сколько у вас денег?')
let apple = prompt('Сколько вы купили яблок?')
let bread = prompt('Сколько вы купили батонов хлеба?')
let apple1 = prompt('Сколько стоит одно яблоко?') * apple
let bread1 = prompt('Сколько стоит один батон хлеба?') * bread
let total = apple1+bread1 <= money
document.body.innerHTML = total