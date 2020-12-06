'use strict';



let age = prompt('Введите Ваш возраст!');

if ( age <= 2) {
    alert('Еще ребенок');
} else if ( age >= 12 && age < 18) {
    alert('подросток');
} else if ( age > 18 && age < 60) {
    alert('взрослый');
} else if ( age >= 60) {
    alert('пенсионер');
}
    


let numeral = prompt('Введите цифру от 0 до 9');

switch (numeral) {
    case '0' :
        alert('0 это )');
        break;

    case '1' :
        alert('0 это !');
        break;

    case '2' :
        alert('0 это @');
        break;

    case '3' :
        alert('0 это #');
        break;

    case '4' :
        alert('0 это $');
        break;

    case '5' :
        alert('0 это %');
        break;

    case '6' :
        alert('0 это ^');
        break;

    case '7' :
        alert('0 это &');
        break;

    case '8' :
        alert('0 это *');
        break;

    case '0' :
        alert('0 это (');
        break;
} 
    


let number = prompt('Введите число от 100 до 999');
number = number + '';

if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
    {
        alert('есть повторяющиеся числа');
    }
    else
        alert('нет повторяющихся чисел');


let year = prompt('Введите любой год');

if ( year % 400 == 0  || year % 4 && year % 100 != 0) {
    alert('высокосный год');
} else {
    
    alert('год не высокосный');
}


let polindrom = prompt('Введите число от 10000 до 99999');
polindrom = polindrom + '';

if (polindrom === polindrom.split('').reverse().join('')) {
    alert('число является полиндромом');
} else {
    alert('это не полиндром');
}
        

let amount = prompt('Введите сумму');
let currency = prompt('Выберите валюту: EUR = 1, UAH = 2, AZN = 3');

switch(currency) {
    case '1':
        alert( amount * 0.82 + 'EUR');
    break;

    case '2':
        alert( amount * 28.29 + 'UAH');
        break;

    case '3':
        alert( amount * 1.70 + 'AZN');
        break;
}


let purchaseAmount = prompt('Введите сумму покупки');

if ( purchaseAmount >= 200 && purchaseAmount <= 300) {
    alert(` сумма Вашей скидки ${purchaseAmount / 100 * 3}`);
} else if ( purchaseAmount > 300 && purchaseAmount <= 500 ) {
    alert(` сумма Вашей скидки ${purchaseAmount / 100 * 5}`);
} else if ( purchaseAmount > 500 ) {
    alert(` сумма Вашей скидки ${purchaseAmount / 100 * 7}`);
}

let majorca = prompt('Туристы, приезжающие на Майорку, обязаны заплатить налог на: 1 - Солнце, 2 - На пальмы, 3 - На плавки');
let santa = prompt('Где живет Санта Клаус: 1 - Франция, 2 - Беларусь, 3 - Северный полюс');
let lake = prompt('Какая самая длинная река в мире: 1 - Амазонка, 2 - Нил, 3 - Янцзы');
let score = 0;

if ( majorca == 1) 
    score =+ 2;
 
if (santa == 3) 
    score =+ 2;

if ( lake == 2) 
    score =+ 2;
    alert(`Ваш счет: ${score}`);