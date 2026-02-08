import express from 'express'
import { validateJson } from './middlewares/validateJson';

const app = express();
app.use(validateJson);

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});