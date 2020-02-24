let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]
let birds = names[0]
let animals = names[1]


birds.forEach((key) => {
	console.log(key[0]);
	console.log(key[1]);
	console.log(key[2]);
})

animals.forEach((key) => {
	console.log(key[0]);
	console.log(key[1]);
})
