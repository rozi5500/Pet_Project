const dotenv = require('dotenv');
dotenv.config();

const { NODE_ENV, PORT } = require('./config/config')


console.log(process.argv);

function sumator(a, b) {
  return a + b;
}

const sumator1 = sumator(14, 10);
console.log(sumator1);