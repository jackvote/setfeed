# setfeed
Установка прайс-фида для делегатских нод блокчейна GOLOS

Необходимые библиотеки устанавливаются через npm

Получение курса GOLOS/GBG описано здесь:
https://github.com/jackvote/price_feed

Работа скрипта не требует докера и не предоставляет трудности.

Запускается в фоне:
```
screen -S feed
cd /home/js/feed
node setfeed.js
Ctrl-A, D
```
Проверка, как идёт работа:
```
screen -x feed
```
Установка nodejs:
Добавьте Node.js LTS репозиторий
Для безпроблемного использования лучше установить последнюю версию LTS.

На момент написания - это Node.js 10.x.
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
Шаг 2: Установите последний Node.js в Ubuntu / Debian

После добавления репозитория перейдите к установке Node.js и NPM. !!!
```
sudo apt-get -y install nodejs
```
Возможен быстрый запуск скрипта в контейнере, благодаря созданному @avral образу.
В параметрах запуска передаётся адрес паблик-ноды, ник делегата и его активный ключ.

## Docker run:
```
docker run -d -e NODE=wss://api.golos.id/ws -e WITNESS=avral -e KEY=5Ht... avral/golosfeeds
```
Но для этого, вначале, требуется установить сам докер. :-)
