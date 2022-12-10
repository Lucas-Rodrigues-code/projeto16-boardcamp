import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes.js';

dotenv.config();

const app = express();

//config
app.use(express.json())
app.use(cors())
app.use(router);

 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port ${port}`))