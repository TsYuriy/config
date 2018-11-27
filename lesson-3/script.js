'use strict';
"use strict";

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let MONTH = 30;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

function detectDayBudget () {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      a != '' &&
      typeof b != null &&
      b != '' &&
      a.length < 50 &&
      b.length < 50
    ) {
      appData.expenses[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('некорректные данные');
    }
  }

  appData.moneyPerDay = appData.budget / MONTH;

  alert('Ежедневный бюджeт ' + appData.moneyPerDay);
  return appData.moneyPerDay;
}

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
      } else {
        console.log('Произошла ошибка');
      }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Статья необязательных расходов?', ''),
            b = prompt('Во сколько обойдется?', '');

        if (
            typeof a === 'string' &&
            typeof a != null &&
            a != '' &&
            typeof b != null &&
            b != '' &&
            a.length < 50 &&
            b.length < 50
        ) {
            appData.optionalExpenses[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('некорректные данные');
        }
    }    
    
}

detectDayBudget();
detectLevel();
chooseOptExpenses();
