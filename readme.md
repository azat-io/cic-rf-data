# Данные ЦИК РФ

Данные участковых избирательных комиссий

## Установка

`npm install --save azat-io/cic-rf-data`

## Использование

```js
import { tatarstan } from 'cic-rf-data'

tatarstan.forEach(item => {
    console.log(item.address)
})
```

## Регионы

В настоящее время доступны данные для следующих регионов:

* г. Москва (`moscowCity`)
* г. Санкт-Петербург (`stPetersburg`)
* Республика Татарстан (`tatarstan`)

## Лицензия

MIT
