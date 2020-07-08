const { MongoClient } = require('mongodb');
const { url, dbName } = require('../config/db');
const customerModel = require('./customer');

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

client.connect()
  .then(() => {
    console.log('Successfully connected to the database');
  }) 
  .catch((error) => console.log(error));

const db = client.db(dbName);

module.exports = {
  db
};
