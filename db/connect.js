import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger';
import config from '../core/config/config.dev';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    let dbId = config.dbId;
    let dbPwd = config.dbPwd;
    try {
        await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true });
        // await Mongoose.connect(`mongodb://${dbId}:${dbPwd}@${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true });
        logger.info('Connected to mongo!!!');
    } catch (err) {
        logger.error('Could not connect to MongoDB');
    }
};

export default connectToDb;
