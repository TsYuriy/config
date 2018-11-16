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

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' &&
        (typeof (b)) != null && b != "" && a.length < 50 && b.length < 50) {
        appData.expenses[a] = b;
        console.log(i);
    } else { 
        i--;           
        console.log('+');
    }
};

appData.moneyPerDay = appData.budget / MONTH;

console.log(appData.moneyPerDay);
console.log(appData.expenses);

// let i = 0;
// while(i<2){
//     appData.expenses[prompt("Введите обязательную статью расходов в этом месяце","")] = +prompt("Во сколько обойдется?", "");
//     i++;
// }

// let i = 0;

// do{
// appData.expenses[prompt("Введите обязательную статью расходов в этом месяце","")] = +prompt("Во сколько обойдется?", "");
// i++;} while(i<2);