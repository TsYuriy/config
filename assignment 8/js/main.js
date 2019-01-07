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

let btn = document.querySelectorAll('button');

function btnAttr(arr){
    for(let key of arr){
       if(key.className != 'start'){
           key.setAttribute('disabled', true);
       }
    }
}
btnAttr(btn);



startBtn.addEventListener('click', function(){
    for(let key of btn){
        if(key.className != 'start'){
            key.removeAttribute('disabled');
        }
     }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');    

    while (isNaN(money) || money == '' || money == null ) {
        money = prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function (){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
          b = expensesItem[++i].value;
  
        if (
          typeof a != null &&
          a != '' &&
          typeof b != null &&
          b != '' &&
          a.length < 50
        ) {
          console.log('Всё верно');
          appData.expenses[a] = b;
          sum += +b;        
        } else {
          i--;        
        }
      }
      expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
});

countBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        if(expensesValue != undefined){
            appData.budget -= expensesValue.textContent; 
        }
    appData.moneyPerDay = (appData.budget / MONTH).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = 'Минимальный уровень достатка';
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень достатка';
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = 'Высокий уровень достатка';
      } else {
        levelValue.textContent = 'Произошла ошибка';
      }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }    
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;  
});

checkSavings.addEventListener('check', function () {
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }    
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,  
};