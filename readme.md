## Скрипт который преобразовывает markdown и JSON в статичную HTML страничку

Скрипт работает на NodeJS

[Скачать и установить NodeJS](https://nodejs.org/en/download/)

Далее открываем консоль и вводим следущие комманды.

### Установка

```
git clone git@github.com:marxists-internet-archive/markdown_parser.git

npm install

npm run generate
```

Все что находится в папке "content" можно изменять.

- book.md - содержание книги или документа 
- metadata.json - дополнительные поля.

После того как вы изменили содержание **book.md** и **metadata.json** повторяем операцию:

``` 
npm run generate 
```
результатом является файл под названием **result.html**

### PS. Это пока лишь пробная версия