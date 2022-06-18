const func = require('./sumator.js')

const dotenv = require('dotenv');
dotenv.config();

const { NODE_ENV, PORT } = require('./config/config')


console.log(NODE_ENV);
console.log(PORT);


const sumator1 = func.sumator(5, 20);
