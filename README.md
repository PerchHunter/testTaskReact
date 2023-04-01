### Тестовое задание React.
- Менеджер пакетов NPM;
- Маршрутизация React-router-dom;
- Как хранилище данных использовал MobX, mobx-react-lite;
- Стилизованные компоненты Material UI;
- Для работы с формой использовал библиотеки Formik и Yup;
- Получение данных по API, WebSocket;
- Для тестирования использовал  Jest;
- Компилятор Babel;
- Сборщик Webpack;
- Сборка самостоятельная, с нуля (без create-react-app). 

---

ТЗ:
### Создание проекта на Vue.js/React
Развернуть приложение на Vue.js/React, подключить одну из UI библиотек на свой
выбор.
Необходимо создать приложение, состоящее из нескольких страниц. Первая - по
адресу /login. На странице логина располагается форма авторизации. Форма состоит
из двух полей - email и пароль.

Валидация полей:
- Email - проверка на корректный email адрес
- Пароль - минимум 8 символов, обрезка пробелов, минимум одна заглавная
буква
По нажатию на кнопку авторизации проверить валидность полей, в случае валидности
имитировать запрос на сервер (2 секунды), форму заблокировать, обозначить на
форме что идет загрузка, после двух секунд перейти на главную страницу по адресу ‘/’.

Главная страница:
Сделайте шапку с двумя пунктами меню - Главная страница и ссылка на страницу
логина.
В теле главной страницы 2 колонки - первая список пользователей с пагинацией.
Вторая - список событий.
Список пользователей выводить по 5 записей, под таблицей постраничная пагинация.
Запрос на получение списка пользователей: GET (API скрыл)
В таблице списка пользователей вывести все 4 колонки полей пользователя и пятую
колонку с действиями. Ctime - время создания пользователя, отобразить в формате
“DD.MM.YYYY HH:mm”. Действие в последней колонке одно - удаление пользователя.
Здесь запрос делать не надо, просто удалите эту запись из таблицы на фронте.
Во время загрузки данных в таблице показать загрузчик
Во второй колонке отобразить список событий. События приходят через вебсокет.
Адрес подключения - (API скрыл). Используйте vue-native-websocket.
События генерируются раз в несколько секунд. При получении события это событие
нужно добавить в список событий и отобразить в колонке, можно в виде таблицы. Поля ctime, event. 
Время отобразить в формате DD.MM.YYYY HH:mm
Все стили на свое усмотрение.
