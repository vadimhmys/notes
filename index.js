import express from 'express';
import config from 'dotenv/config';
import sequelize from './db.js';
import * as mapping from './models/mapping.js';
import cors from 'cors';
import router from './routes/index.js';
import ErrorHandler from './middleware/ErrorHandler.js';
//import { Client } from 'pg';
import pkg from 'pg';
const { Client } = pkg;

const PORT = process.env.PORT || 5000;

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', (req, res) => {
  res.send("Hello, world!");
});

app.use('/api', router);

app.use(ErrorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log('Сервер запущен на порту', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
