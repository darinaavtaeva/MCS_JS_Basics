const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

request.onclick = function(){
	popup.style.display = 'flex';
}
closePopup.onclick = function(){
	popup.style.display = 'none';
}
openMenu.onclick = function(){
	menu.style.left = '0';
}
closeMenu.onclick = function(){
	menu.style.left = '-50vw';
}