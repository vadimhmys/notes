import express from 'express';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
