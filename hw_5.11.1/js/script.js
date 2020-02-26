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


names.forEach((item) => {
	item.forEach((key) => {
		key.forEach((name) => {
			console.log(name);
		})
	})
})


