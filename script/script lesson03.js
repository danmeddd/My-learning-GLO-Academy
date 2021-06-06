'use strict'

let money = 450000; 
console.log(typeof money);
let income = 'freelance';
console.log(typeof income);
let addExpenses = 'Flatpay, Apartment-receipt, Metro';
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split (' '))

let deposit = false; 
console.log(typeof deposit);
let mission = 7000000; 
let period = 8;
console.log('Период равен ' + period + ' месяцев.' );
console.log('Цель заработать ' + mission + ' рублей.');

let budgetDay = money/30; 
console.log(budgetDay);




let money = +prompt('Ваш ежемесячный платеж?', '450000');
console.log(typeof money);

let addExpenses = prompt('Перечислите возмоные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

let deposit = prompt('Есть ли у Вас депозит в банке?');
console.log(typeof !!deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(typeof expenses1);

let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(typeof expenses2);

let amount1 = prompt('Во сколько мне это обойдется?');
console.log(amount1);

let amount2 = prompt('Во сколько мне это обойдется?');
console.log(amount2);

let budgetMonth = 50000+7000+4000+40000+15000;
console.log('Бюджет на месяц: ' + budgetMonth);


let mission = 7000000;
let howManyMonths = mission/budgetMonth;
console.log(howManyMonths);
console.log('Цель будет достигнута за ' + Math.ceil(howManyMonths) + ' месяц');


let budgetMonth = 50000+7000+4000+40000+15000;
let budgetDay = budgetMonth/30;
console.log(budgetDay);
console.log('Бюджет на день: '+ Math.floor(budgetDay));


if (budgetDay > 1200) {
    console.log('У Вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У Вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0 ) { 
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
} else if (budgetDay = 1200;) {
    console.log ('Ваш доход граничит c высоким и очень высоким');
} else if (budgetDay = 600 ) {
    console.log('Ваш доход граничит между средним и высоким');
} else if (budgetDay = 0 ) {
    console.log('Ваш доход 0');
}





/*
2) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
3) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")
4) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных
6) Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
10) Проверить, чтобы все работало и не было ошибок в консоли
11) Добавить папку с третьим уроком в свой репозиторий на GitHub */


