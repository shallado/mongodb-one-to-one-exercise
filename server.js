const express = require('express');
const { Customer } = require('./models');
const customerModel = require('./models/customer');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const initiate = () => {
  const customerOne = new Customer('Bill Gates', 64, 'male');
  const customerTwo = new Customer('Barack Obama', 58, 'male');
  const customers = [customerOne, customerTwo];

  for (let i of customers) {
    i.create()
      .then((customer) => console.log({
        message: 'Successfully added customer to the database',
        customer
      }))
      .catch((error) => console.log(
        `Error occurred while adding customer \n ${error}`
      ))
  }
};

initiate();

app.listen(port, () => console.log(
  `Successfully connected to database on port: ${port}`
));