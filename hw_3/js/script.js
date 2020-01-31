const Body = document.querySelector('body');
const Page = document.querySelector('.page');
const Person = document.querySelector('.name');
const Image = document.querySelector('img');
const Bio = document.querySelector('.shortBio');

let bodyColor = prompt('Какой будет фон у страницы?');
Body.style['background-color'] = bodyColor;

let textColor = prompt('Какой будет цвет текста на странице?');
Page.style['color'] = textColor;

let personName = prompt('Как зовут человека, который вас вдохновляет?');
Person.innerHTML = personName;

let imageAddress = prompt('Введите адрес картинки');
Image.setAttribute('src', imageAddress);

let textBio = prompt('Введите текст страницы');
Bio.innerHTML = textBio;

Bio.className += ' animated';