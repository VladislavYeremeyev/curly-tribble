# Shopping Cart App

## Запуск

1) Склонируйте/скачайте репозиторий
2) Установите зависимости `yarn`
3) Запустите локальный сервер `yarn start`

`yarn build` соберет prod-билд приложения

## Технологии

* React, Redux, React-Redux, Redux-saga, React-Router.
* [Material UI](https://material-ui.com/ru/) - библиотека React-компонентов.
* В качестве mock backend-части использовал [my-json-server](https://my-json-server.typicode.com/).
Данные находятся в файле `db.json`.
* Изображения взяты с [Unsplash](https://unsplash.com/).

## Замечания

* В локальном сервере в консоль падает ошибка при открытии сайдбара с корзиной.
Это связано с проблемой библиотеки Material UI, которая использует в своем коде deprecated `findDOMNode`. 
Подробнее в [issue](https://github.com/mui-org/material-ui/issues/13394).