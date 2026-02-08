import express from 'express'
import { validateJson } from './middlewares/validateJson';
import router from './routes/routes';

const app = express();
app.use(validateJson);
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});