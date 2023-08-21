
# Реакт галерея   

![image](https://github.com/ScherbakovM/gallery-react/assets/109952823/bce095ca-3d7b-4875-b1d8-e7ea483b4b7e)   

При загрузке страницы фото загружаются [с json-servera](hhttps://www.npmjs.com/package/json-server) 
фото храняться на 
### для того чтобы он заработал необходимо выполнить его установку   
```
npm install -g json-server
```

В package.json добавляем скрипт для запуска сервера 

```
"server": "json-server -w server/db.json -p 4200"
```

Чтобы одновременно запустить сервер и реакт приложение устанавливаем [concurrently](https://www.npmjs.com/package/concurrently)
