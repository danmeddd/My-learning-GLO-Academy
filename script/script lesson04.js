'use strict'

let money = 450000; 
console.log(typeof money);
let income = 'freelance';
console.log(typeof income);
let addExpenses = 'Flatpay, Apartment-receipt, Metro, Food, Entertainment';
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

/*
let flatPay = 50000;
let apartmentReceipt = 9000;
let metro = 4000;
let food = 25000;
let entertainment = 15000;
*/

/* 
let budgetMonth = flatPay + apartmentReceipt + metro + food + entertainment;
console.log('Бюджет на месяц: ' + budgetMonth); 
*/

/*
let budgetMonth = flatPay + apartmentReceipt + metro + food + entertainment;
let budgetDay = budgetMonth/30;
console.log(budgetDay);
console.log('Бюджет на день: '+ Math.floor(budgetDay));
*/

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



function getExpensesMonth(pay){
    console.log('it is my monthly expenses: ' + pay);
}
getExpensesMonth(budgetMonth);



const profit = function getAccumulatedMonth(income, expenses){
    console.log(income - expenses);
    };
    profit(170000, 100000);

const profit = function getAccumulatedMonth(income, expenses){
    return income - expenses;
};
  
let accumulatedMonth = profit(170000, 100000);
console.log('Мое накопление за месяц : ', accumulatedMonth);


const getTargetMonth = function(mission, accumulatedMonth){
  return mission / accumulatedMonth;
  };

let myTarget = getTargetMonth(7000000, 70000);
console.log ('Моя цель будет достигнута за ' +  myTarget + ' месяцев');


let mission = 7000000;
let howManyMonths = mission/accumulatedMonth;
console.log(howManyMonths);
console.log('Цель будет достигнута за ' + Math.ceil(howManyMonths) + ' месяц');


let income = 170000;
let expenses = 100000;
let daysOfMonth = 30
let budgetDay = (income-expenses) /daysOfMonth;
console.log(Math.ceil(budgetDay));


let addExpenses = ['flatPay: 50000', 'apartmentReceipt: 9000', 'metro: 4000', 'food:25000', 'entertainment: 15000']

console.log(addExpenses);

let showTypeOf = function(data){
    console.log(typeof(data));
};
showTypeOf(budgetDay);
    console.log(typeof budgetDay);


let getStatusIncome = function(){

    if (budgetDay > 1200) {
        return ('У Вас высокий уровень дохода');
    } else if (budgetDay > 600 && budgetDay < 1200) {
        return ('У Вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay > 0) { 
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        return ('Что то пошло не так');
    } else if (budgetDay = 1200) {
        return ('Ваш доход граничит c высоким и очень высоким');
    } else if (budgetDay = 600) {
        return ('Ваш доход граничит между средним и высоким');
    } else if (budgetDay = 0) {
        return ('Ваш доход 0');
    }
};
console.log(getStatusIncome());




/*
1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
5) Удалить из кода переменную budgetMonth
6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

7) Почистить консоль логи и добавить недостающие, должны остаться:
 - вызовы функции showTypeOf
 - Расходы за месяц вызов getExpensesMonth
 - Вывод возможных расходов в виде массива (addExpenses)
 - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
 - Бюджет на день (budgetDay)
 - вызов функции getStatusIncome

8) Проверить, чтобы все работало и не было ошибок в консоли
9) Добавить папку с четвертым уроком в свой репозиторий на GitHub



