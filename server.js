const express = require('express');
const { ObjectId } = require('mongodb');
const { Customer, Identifier } = require('./models');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// this essentially is a one-to-one relationship that is ref/link documents approach
const initiate = () => {
  const customerOne = new Customer('Bill Gates', 64, 'male');
  const customerTwo = new Customer('Barack Obama', 58, 'male');
  const customers = [customerOne, customerTwo];

  for (let i of customers) {
    i.create()
      .then((customer) => {
        console.log(customer);

        const identifierOne = new Identifier(
          ObjectId(customer[0]._id).toHexString().slice(16), 
          ObjectId(customer[0]._id)
        );

        identifierOne.create()
          .then((identifier) => console.log(identifier))
          .catch((error) => console.log(
            `Error occurred while adding identifier \n ${error}`
          ));
      })
      .catch((error) => console.log(
        `Error occurred while adding customer \n ${error}`
      ))
  }
};

initiate();

app.listen(port, () => console.log(
  `Successfully connected to database on port: ${port}`
));