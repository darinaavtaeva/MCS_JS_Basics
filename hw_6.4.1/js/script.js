const APIKey = '8a1581eadc3586c2e58b80027aae7e80';
const form = document.forms[0];


form.onsubmit = function(e){
	e.preventDefault();

	var cityName = form.elements.cityName.value;
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+form.elements.cityName.value+'&appid='+APIKey;
	var insertTemp = document.querySelector('.insertTemp');
	var insertWind = document.querySelector('.insertWind');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if(xhr.status != 200) {
		console.log(xhr.status + ' '+ xhr.statusText);
	}else {
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		console.log(Math.trunc(DATA.main.temp - 273.15));
		insertTemp.innerHTML = Math.trunc(DATA.main.temp - 273.15);
		insertWind.innerHTML = Math.trunc(DATA.wind.speed/2.237);
	}
}