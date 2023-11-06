import express from 'express';
import productRouter from './router/pro.router.js';
import productconnent from './schemas/index.js';
const app = express();
const port = 3000;

productconnent();
app.use(express.json());

app.use(productRouter);

app.listen(port, () => {
    console.log(`서버 구동이 정상적으로 완료되었습니다. 포트 : ${port}`);
});
