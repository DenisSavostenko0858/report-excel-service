## Сервис заказчика Express TS

### npm run start
PORT: 3000

## Сервис отчетов Nest + ORM Prisma

### npm run start
PORT: 5000

## Api для работы с Postman

### Получение данных из сервиса заказчика
  
GET: http://localhost:3000/data

### Создание отчета
  
POST: http://localhost:5000/reports

 -Пример запроса JSON:

 ```
{
    "serviceName": "Фрукты",
    "endpoint": "http://localhost:3000/data",
    "headers": "Яблоко груша"
}
```

 -Ответ запроса JSON:

 ```
{
    "id": "1"
}
```

### Получение отчета
  
GET: http://localhost:5000/reports/:id

 -Ответ запроса JSON:

 ```
{
    "id": 1,
    "status": "Готов для чтения",
    "url": "./reports/report_1.xlsx"
}
```

-Если статус не "Готов для чтения" или же передали не корректный endpoint:

```
{
    "id": 3,
    "status": "Ошибка",
}
```