let startBtn = document.getElementById('start');

let childArr = document.querySelector('.result-table').children;
let arrValue = [];

!(function sortArr(arr){  

    for(let i = 0; i < arr.length; i++){
    
        if((arr[i].className.indexOf('value'))>0){
            arrValue.push(arr[i]);        
        }
    }
    
})(childArr);

let budgetValue = arrValue[0],
    dayBudgetValue = arrValue[1],
    levelValue = arrValue[2],
    expensesValue = arrValue[3],
    optionalExpensesValue = arrValue[4],
    incomeValue = arrValue[5],
    monthSavingsValue = arrValue[6],
    yearSavingsValue = arrValue[7];    

let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),    
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time,
    MONTH = 30;



startBtn.addEventListener('click', function(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null ) {
        money = prompt('Ваш бюджет?', '');
    }
});

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
  checkSavings: function(){
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
          percent = +prompt('Под какой процент?', '');

      appData.monthIncome = save/100/12*percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);    
    }
  },
  chooseOptExpenses: function(){
    for(let i = 1; i < 3; i++){
      let opt = prompt('Статья необязательных расходов?', '');
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function(){
    let items;

    while (items == '' || items == null || items == undefined || typeof(items) != "string") {
      items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    }
    appData.income = items.split(', ');
    let tmp = prompt('Может что то ещё?', '');
    tmp?appData.income.push(tmp):appData.income;
    appData.income.sort();

    appData.income.forEach(function(item, i){  
      console.log("Способы доп. заработка: " + (i+1) + '-' + item);
    });
    
    
  } 
  
};

appData.chooseIncome();
for(var key in appData){
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}