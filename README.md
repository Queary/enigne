# Содержание
Что такое enigne

способ подключения

первоначальные настройки и проверка работоспособности движка

Документация


# enigne
enigne - это игровой движок дающий не плохой API для работы с canvas HTML5.
При этом ускоряя разработку игры во много раз!

# способ подключения
1)скачать во вкладке релиз нужную версию!
2)подключить script:
-подключение движка

-подключение логики(не обязательно называть файл js именно так)
3)писать код!)

# первоначальные настройки и проверка работоспособности движка
рекомендуется писать так но по усмотрению можно менять как удобно ток с осторожностью

при загрузки страницы будет выполняться код
window.onload = function(){код всей игры}

создаем пространство для движка
var x = new enigne("canvas");

после инициализации обязательно первым блоком должен быть игрок а потом уже другие блоки
x.block('player','player',150,100,25,25,'purple');

придаем физику нашей игре
x.phys(0.5,15)

придаем контент для игры через блоки
x.block('gr1','block',50,50,50,50,'black');

создаем переменные для управления персонажем
let px = x.v.x('player');

let py = x.v.y('player');


создаем управление
key('a','ф',(()=>{

py = x.v.y('player')

px-=10;x.move("player",px,py);

}))

Тестим игру и находим ошибки или баги движка

игра готова!

var hp = 8;8 шагов счастья вместе с enigne)


# Остальная Документация и описание всех методов движка
будут описаны в папке doc которая будет пополняться по релизам или по необходимости
