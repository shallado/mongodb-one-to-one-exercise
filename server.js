const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.listen(port, () => console.log(
  `Successfully connected to database on port: ${port}`
));