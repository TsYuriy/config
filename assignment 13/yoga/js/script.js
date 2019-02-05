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

    let deadLine = '2019-03-29';

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


    let content = document.querySelector('.content'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');   
    

    content.addEventListener('click', function(event){
        
        let target = event.target;        
        if(target && target.classList.contains('description-btn') || target && target.classList.contains('more')){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            
        }
    });

    let formContact = document.querySelector('#form'),
        inputContact = formContact.getElementsByTagName('input');        

    formContact.addEventListener('submit', function(event){
        event.preventDefault();
        formContact.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(formContact);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';            
        }
    });


});