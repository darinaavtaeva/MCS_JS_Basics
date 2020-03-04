window.addEventListener('load', function() {
	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {return this.happiness = this.happiness+1}
		hasRest() {return this.happiness = this.happiness+1}
		hasMoney() {return this.happiness = this.happiness+1}
		isSunny() {
			const APIKey = '8a1581eadc3586c2e58b80027aae7e80';
			const city = 'Москва';
			const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

			let xhr = new XMLHttpRequest();

			setTimeout(xhr.open('GET', url, false), 0);

			xhr.send();

			let DATA = JSON.parse(xhr.responseText);
			let Temp = DATA.main.temp - 273;

			if(Temp > 15) {
				return this.happiness = this.happiness+1
			}else {
				return this.happiness
			}
			console.log(Temp)
		}
	}

	const form = document.forms[0];
	form.onsubmit = function(e){
		e.preventDefault();
		let name = form.elements.name.value;
		let cat = form.elements.cat.value;
		let rest = form.elements.rest.value;
		let money = form.elements.money.value;
		const User = new Person(name)
		if(cat == 'yes') {User.hasCat()}
		if(rest == 'yes') {User.hasRest()}
		if(money == 'yes') {User.hasMoney()}
		User.isSunny()
		let userName = document.querySelector('.personName')
		let icon = document.querySelector('.icon')
		userName.innerHTML = name;
		if (User.happiness == 4) {
			icon.innerHTML = '&#128513';
		}else if (User.happiness == 2 || User.happiness == 3) {
			icon.innerHTML = '&#128528';
		}else {
			icon.innerHTML = '&#128577'
		}
	}
})