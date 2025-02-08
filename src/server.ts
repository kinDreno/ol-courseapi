import express from 'express'
import { type Express } from 'express';


const app: Express = express();
const PORT: number = 3000;

app.use(express.json())
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})