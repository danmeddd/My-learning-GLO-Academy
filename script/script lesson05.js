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


let money= 450000;
let start = function () {

do {
console.log(money);
money++;

}
while(money < 500005);
};

start();


let money = +prompt('Ваш ежемесячный доход?', '450000');
console.log(typeof money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
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


let flatPay = 50000;
let apartmentReceipt = 9000;
let metro = 4000;
let food = 25000;
let entertainment = 15000;
let pay = 103000;

/*= flatPay + apartmentReceipt + metro + food + entertainment;
*/

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let getExpensesMonth = function() {
    money = prompt('Во сколько это обойдется?');
    
    while (!isNumber(money)) {
        money = prompt('Во сколько это обойдется?'); 
    }

};

getExpensesMonth();


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
let daysOfMonth = 30;
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
1) Переписать функцию start циклом do while

2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth

3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком в свой репозиторий на GitHub
*/

