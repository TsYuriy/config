let menu = document.querySelector('.menu');
let menuLi = document.getElementsByClassName('menu-item');
menu.insertBefore(menuLi[2], menuLi[1]);

let menuLiNew = menuLi[3].cloneNode(true);
menuLiNew.textContent = 'Пятый пункт';
menu.appendChild(menuLiNew);

let body = document.querySelector('body');
body.style.backgroundImage = 'url(./img/apple_true.jpg)';

let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

let promptText = document.querySelector('#prompt'),
text = prompt('Ваше отношение к технике apple?', '');

promptText.appendChild(document.createTextNode(text));



