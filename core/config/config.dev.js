import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
// config.dbName = process.env.dbName || 'trains';
config.dbName = process.env.dbName || 'test_db';
config.dbId = process.env.dbId || 'test';
config.dbPwd = process.env.dbPwd || 'test';
// 혹시 몰라서 백업 / id : inbm32 / pwd : 1
config.serverPort = process.env.serverPort || 3000;

export default config;
