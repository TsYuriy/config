window.addEventListener('DOMContentLoaded', function(){  // как только загрузятся элементы дерева запуститься основной код 

    'use strict';
    // задаем переменные
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // функция скрывает элементы
    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
             tabContent[i].classList.remove('show'); //удаляем класс show у элементов начиная с элемента а
             tabContent[i].classList.add('hide'); //добавляем класс hide у элементов начиная с элемента а (скрываем элементы)
        }
    }

    hideTabContent(1); // скрываем элементы нвчиная с второго

    // функция показывает элемент
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){ // если у нажатого элемента есть класс 'hide'
            tabContent[b].classList.remove('hide'); // то удаляем класс
             tabContent[b].classList.add('show'); // и добавляем класс 'show', показывая элемент
        }
    }

    info.addEventListener('click', function(event){ //добавляем обработчик событий на блок табов
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){ //если событие совершено и у нажатого элемента есть класс, запускаем цикл
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]){ // если событие совершенно на этом табе, скрываем все табы и показываем тот на который нажали
                    hideTabContent(0);
                    showTabContent(i);
                    break; // выходим из цикла
                }
                
            }
        }
    });

    let deadLine = '2019-01-18';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60));

            if(t <= 0) {
                seconds = minutes = hours = '00';
            }

            return {
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            };
    }

    function setClock(id, endTime){
        let t = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endTime);
                hours.textContent = (String(t.hours).length < 2) ? '0' + t.hours : t.hours;
                minutes.textContent = (String(t.minutes).length < 2) ? '0' + t.minutes : t.minutes;
                seconds.textContent = (String(t.seconds).length < 2) ? '0' + t.seconds : t.seconds;
                
                if(total <= 0) {
                    clearInterval(timeInterval);
                }

            }
    }

    setClock('timer', deadLine);


});