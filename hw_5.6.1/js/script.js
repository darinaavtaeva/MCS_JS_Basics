const form = document.forms[0];
const insert = document.querySelector('.result');

form.onsubmit = function(e){
	e.preventDefault();
	insert.innerHTML = Math.sin(form.elements.quantility.value);
}