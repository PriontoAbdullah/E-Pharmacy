const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./api/routes/AuthRouter');
require('dotenv').config();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routers
app.use('/auth', authRouter);

app.get('/', (req, res) => res.send('welcome our app'));

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL_PAST;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
