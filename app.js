const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, DB_URI } = require('./configs/env.config');

mongoose.connect(
  DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to database!');
  }
);
require('./models/index.model');
app.use(require('./routes/index.route'));

app.get('/', (req, res) => {
  res.send('Server Started!');
});
app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}
    http://localhost:${PORT}`);
});
