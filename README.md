# FargoCards

Обучающая игра-викторина по мотивам TinyCards, разработанная Duolingo, для обучения с помощью карточек на разные темы. В его основе лежит система, которая предполагает интервальное повторение новых слов и понятий до тех пор, пока учащийся не запомнит материал.

# Поиграть

- [На Yandex.Cloud](https://fargo-cards-5.ya-praktikum.tech/)
- [На Heroku](https://fargocards.herokuapp.com/)

# Реализация
Основной стек приложения - Typescript, React, Redux, сама игра отрисовывается на canvas. 

В приложении реальзованы: 
- Server-side rendering (SSR)
- Service worker
- Обмен данных с бд - PostgreSQL с помощью Sequelize

Приложение и бд разворачиваются в Docker. Тесты написаны на Jest.

# Запустить

```
npm run start:container
```

В докере запускается 3 контейнера - game, database, pgadmin. На Windows - убедиться, что включена виртуализация.

# Установка dev https
- нужно установить mkcert и запустить mkcert -install
инфа здесь https://web.dev/how-to-use-local-https/
- перейти во вкладку server/devCert и создать сертификат
`mkcert -key-file key.pem -cert-file cert.pem ya-praktikum.tech *.ya-praktikum.tech`

# OAuth
Проверем на адресе https://localhost:5000

# Обычная (и серверная) аутентификация
Адрес https://local.ya-praktikum.tech:5000/
