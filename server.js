import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './core/logger/app-logger';
import morgan from 'morgan';
import config from './core/config/config.dev';
// route
import cars from './routes/cars.route';
import users from './routes/users.route';
import purifiers from './routes/purifiers.route';
import friend from './routes/friends.route';
import todo from './routes/todo.route';
// db
import connectToDb from './db/connect';

const port = config.serverPort;
logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));

app.use('/users', users);
app.use('/cars', cars);
app.use('/purifiers', purifiers);
app.use('/friend', friend);
app.use('/todo', todo);

//Index route
app.get('/', (req, res) => {
    res.send('test');
});

app.listen(port, () => {
    logger.info('server started - ', port);
});
