let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let MONTH = 30;


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце","")] = +prompt("Во сколько обойдется?", "");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце","")] = +prompt("Во сколько обойдется?", "");



alert(appData.budget/MONTH);

