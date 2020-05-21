const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, DB_URI } = require('./configs/env.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('useFindAndModify', false);
mongoose.connect(
  DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to database!');
  }
);
app.get('/', (req, res) => {
  res.send('Server Started!');
});
require('./models/index.model');
app.use(require('./routes/index.route'));

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}
    http://localhost:${PORT}`);
});
