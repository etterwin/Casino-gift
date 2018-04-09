$(function changeLang() {
    return(
        $("#header-select").on("change", function (event) {
            let valueOption = $("#header-select option:selected").attr('value');
            return(valueOption);
        })
    );
});


// Функция заполнения и определения геопозиции
$(document).ready(function () {

    let lang = changeLang(); // Сравнить с языками

    let arrOfOptions = document.querySelectorAll('.header-item'); // Создаем массив из всех Option в выпадающем списке

    for (let i = 0; i <= arrOfOptions.length; i++) { // Пробегаемся по всем элементам массива

        let country = navigator.language || navigator.browserLanguage; // Определяем геопозицию юзера, чтобы определить параметры Select и наполнить нужным контентом страницу

        if (country === 'ru') { // Если регион РФ
            if (arrOfOptions[i].value === 'rus') {
                $('.header-item:eq(0)').attr('selected', true);
                $('#flag').attr('src', 'assets/pictures/png/rus_flag.png');
            }
        }
        else if (country === 'de' ) { // Если это Германия
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
        // Но что делать, если ни один из них?
    }

});

// Скролл к якорю
$(document).ready(function () {
    $("#start").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({
                scrollTop: destination
            }
            , 400);
        return false;
    });
});

// Прибавление к числу
$(document).ready(function () {

    // Бонусы
    let num_1 = 82052;
    $('#num_1').text(num_1);

    setInterval(function () {
        num_1++;
        $('#num_1').text(num_1);
    }, 2000);

    // Пользователи
    let num_2 = 223579;
    $('#num_2').text(num_2);

    setInterval(function () {
        num_2 = num_2 + setInterval(function (min, max) {
            return Math.floor(Math.random() * (max - min + 15)) + 10;
        }, 1000);
        $('#num_2').text(num_2);
    }, 20000);

    // Онлайн
    let num_3 = 1062;
    $('#num_3').text(num_3);

    let count = 1;

    setInterval(function () {
        count++;
        if (count % 2 === 0) {
            num_3 = num_3 + setInterval(function (min, max) {
                return Math.floor(Math.random() * (max - min + 15)) + 1;
            }, 1000);
            $('#num_3').text(num_3);
        }
        else {
            num_3 = num_3 - setInterval(function (min, max) {
                return Math.floor(Math.random() * (max - min + 15)) + 1;
            }, 1000);
            $('#num_3').text(num_3);
        }
    }, 3000);

});