// Функция заполнения и определения геопозиции
$(document).ready(function () {

    $('#header-select').on("change", function (event) { // Если язык был изменен вручную

        let valueSelect = $('#header-select option:selected').attr('value'); // Берем value выбранного select

        if (valueSelect === 'rus') { // Если оно rus
            $('.header-item:eq(0)').attr('selected', true);
            $('#flag').attr('src', 'assets/pictures/png/rus_flag.png');
        }
        else if (valueSelect === 'deu') { // Если deu
            $('.header-item:eq(1)').attr('selected', true);
            $('#flag').attr('src', 'assets/pictures/png/germany_flag.png');
        }
        else if (valueSelect === 'ita') { // Или ita
            $('.header-item:eq(2)').attr('selected', true);
            $('#flag').attr('src', 'assets/pictures/png/italy_flag.png');
        }
    });

    let arrOfOptions = document.querySelectorAll('.header-item'); // Создаем массив из всех Option в выпадающем списке

    for (let i = 0; i <= arrOfOptions.length; i++) { // Пробегаемся по всем элементам массива

        let country = navigator.language || navigator.browserLanguage; // Определяем геопозицию юзера, чтобы определить параметры Select и наполнить нужным контентом страницу

        if (country === 'de') { // Если это Германия
            if (arrOfOptions[i].value === 'deu') {
                $('.header-item:eq(1)').attr('selected', true);
                $('#flag').attr('src', 'assets/pictures/png/germany_flag.png');
            }
        }
        else if (country === 'it') { // Или италия
            if (arrOfOptions[i].value === 'ita') {
                $('.header-item:eq(2)').attr('selected', true);
                $('#flag').attr('src', 'assets/pictures/png/italy_flag.png');
            }
        }
        else { // Если регион РФ или любой другой
            if (arrOfOptions[i].value === 'rus') {
                $('.header-item:eq(0)').attr('selected', true);
                $('#flag').attr('src', 'assets/pictures/png/rus_flag.png');
            }
        }
    }

});

//----------------------------------------------------------------------------------------------------------------------

// Скролл к якорю
$(document).ready(function () {
    $('#start').click(function () {
        let elementClick = $(this).attr("href"); // Берем значение атрибута href
        let destination = $(elementClick).offset().top; // И скроллим страницу к нему
        $('html').animate({
                scrollTop: destination
            }
            , 400);
        return false;
    });
});

//----------------------------------------------------------------------------------------------------------------------

// Прибавление к числу
$(document).ready(function () {

    // Бонусы
    let num_1 = 82052; // Заказное число
    $('#num_1').text(num_1); // Записать заказное число в объект

    setInterval(function () {
        num_1++; // Изменение на единицу
        $('#num_1').text(num_1);
    }, 2000);

    // Число пользователей
    let num_2 = 223579; // Заказное число
    $('#num_2').text(num_2); // Записать заказное число в объект

    setInterval(function () { // Прибаление рандомного числа от 10 до 15
        num_2 = num_2 + setInterval(function (min, max) {
            return Math.floor(Math.random() * (max - min + 15)) + 10;
        }, 1000);
        $('#num_2').text(num_2);
    }, 20000);

    // Число онлайн
    let num_3 = 1062; // Заказное число
    $('#num_3').text(num_3); // Записать заказное число в объект

    let count = 1; // Счетчик для удобства изменения числа

    setInterval(function () {
        count++;
        if (count % 2 === 0) { // Если счетчик - четный, то функция суммирования
            num_3 = num_3 + setInterval(function (min, max) {
                return Math.floor(Math.random() * (max - min + 15)) + 1;
            }, 1000);
            $('#num_3').text(num_3);
        }
        else { // Если счетчик не четный, то функция разницы
            num_3 = num_3 - setInterval(function (min, max) {
                return Math.floor(Math.random() * (max - min + 10)) + 1;
            }, 1000);
            $('#num_3').text(num_3);
        }
    }, 3000);

});

//----------------------------------------------------------------------------------------------------------------------

// Мувы с колесом
function moveWheel() {

    $('#wheel').addClass('wheel--active'); // Добавление класса для поворота

    setTimeout(function () {

        $('.roulette-btn').css({cursor: 'default'}); // Убрать свойство при наведении
        $('.roulette-btn').removeAttr('onclick'); // И атрибут с функцией

        let destination = 50 + $('#anchor_2').offset().top; // Скролл к следующей рулетке
        $('html').animate({
                scrollTop: destination
            }
            , 600);
        return false;

    },1200);
}

//----------------------------------------------------------------------------------------------------------------------

// Мувы с выбором казино
function chooseCasino() {

    $('.roulette-list').addClass('roulette-list--action');
    setTimeout(function () {

        let destination = $('#anchor_3').offset().top; // Скролл к результату

        $('#roulette-btn').css({cursor: 'default'}); // Убрать свойство при наведении
        $('#roulette-btn').removeAttr('onclick'); // И атрибут с функцией

        $('#result-img').attr('src', 'assets/pictures/png/7.png');
        $('#result-text').text('300 спинов');

        $('html').animate({
                scrollTop: destination // Скролл на результат
            }
            , 600);
        return false;
    }, 1800);
}

//----------------------------------------------------------------------------------------------------------------------

// Крутануть еще разок, испытать удачу
function refreshWheel() {

    let destination = 50 + $('#anchor_4').offset().top; // Скролл к следующей рулетке
    $('html').animate({
            scrollTop: destination
        }, 600);

    setTimeout(function () {

        $('#wheel').addClass('wheel--refresh'); // Добавление класса для поворота
        $('.footer-link').css({display: 'none'});

        setTimeout(function () {
            $('#result-text').text('3000 бонусов');
            let destination = 50 + $('#anchor_3').offset().top; // Скролл к следующей рулетке
            $('html').animate({
                scrollTop: destination
            }, 600);
        },1500)

    },1000);

}
