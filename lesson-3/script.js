'use strict';
'use strict';

let money, time;
let MONTH = 30;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null ) {
    money = prompt("Ваш бюджет?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

      if (
        typeof a != null &&
        a != '' &&
        typeof b != null &&
        b != '' &&
        a.length < 50
      ) {
        console.log('Всё верно');
        appData.expenses[a] = b;        
      } else {
        i--;
        
      }
    }

    
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / MONTH).toFixed();
    alert('Ежедневный бюджeт ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  
};
