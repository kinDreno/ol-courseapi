import express from 'express'
import { type Express } from 'express';

const app: Express = express();
const port: number = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})