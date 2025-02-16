import express from 'express'
import { type Express } from 'express';
import api_router from './routes/api-routes'
import cors from 'cors'
import rateLimit from 'express-rate-limit'

const app: Express = express();
const PORT: number = 3000;

// get request for now.
const cors_handler = {
origin: '*',
methods: "GET",
preflightContinue: false,
optionsSuccessStatus: 204
}

app.use(express.json());
app.use(cors(cors_handler));

app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 120, // 120 requests per 15 minutes
      message: { message: "Too many requests, slow down!" },
      headers: true,
    })
  );

  app.get("*", )
app.use(api_router);

app.use((_, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})