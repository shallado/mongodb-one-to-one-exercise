const { MongoClient } = require('mongodb');
const { url, dbName } = require('../config/db');
const customerModel = require('./customer');
const identifierModel = require('./indentifier');

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

client.connect()
  .then(() => {
    console.log('Successfully connected to the database');
  }) 
  .catch((error) => console.log(error));

const db = client.db(dbName);
const Customer = customerModel(db);
const Identifier = identifierModel(db);

module.exports = {
  db,
  Customer,
  Identifier
};
