const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDb();
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);
app.use('/api/optimizers', require('./routes/optimizeRoutes'));

app.listen(port, () => {
  console.log('running on port ' + port);
});
