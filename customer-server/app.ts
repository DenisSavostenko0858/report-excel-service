import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router/index_roter';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Сервер запущен http://localhost:${PORT}`);
});
   
