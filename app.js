const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const os = require('os')

dotenv.config();

const { PORT } = require('./config/config');

const app = express();

function startApp() {
  app.listen(PORT, () => console.log(`Server is listening ${PORT} port`))
}

startApp();
