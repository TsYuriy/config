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




});