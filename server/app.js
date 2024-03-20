import express from 'express';
import cookieParser from 'cookie-parser';
config();
import {config} from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use(
    cors({
        origin : process.env.FRONTEND_URL,
        credentials : true,
    })
);
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/ping', (req, res) => {
  res.send('Pong');
});
app.all('*', (req, res) => {
    res.status(404).send("Error 404 : Page not Found...")
})

export default app;