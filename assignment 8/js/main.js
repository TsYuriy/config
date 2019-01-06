let btnStart = document.getElementById('start');


let childArr = document.querySelector('.result-table').children;
let arrValue = [];

!(function sortArr(arr){

    

for(let i = 0; i < arr.length; i++){
    
    if((arr[i].className.indexOf('value'))>0){
        arrValue.push(arr[i]);
        
    }
}
    
})(childArr);

let inputExp = document.getElementsByClassName('expenses-item');
let btn = document.getElementsByTagName('button'),
    btnExp = btn[0],
    btnOptExp = btn[1],
    btnCount = btn[2];

let inputOptExp = document.querySelectorAll('.optionalexpenses-item');

// статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день

let incomeLabel = document.querySelector('#income'),
    checkBox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
