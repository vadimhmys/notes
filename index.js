const express = require('express');
const app = express();

// Use port from Heroku, otherwise default port
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
