const express = require('express');
const dotenv = require('dotenv');

const { movieRouter } = require('./router');
const sequelize = require('./db')

dotenv.config();

const app = express();

app.use(express.json())

sequelize.sync().then(() => {
  console.log('Connected to db')
}).catch((e) => {
  console.log(e)
})

app.use('/movie', movieRouter)

app.listen(5000, () => console.log(`Server started on ${ 5000 } port`))

