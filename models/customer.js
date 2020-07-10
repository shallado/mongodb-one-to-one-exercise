const { ObjectId } = require("mongodb");

// name, age, gender
const customerModel = (db) => {
  class Customer {
    constructor(name, age, gender, identifier) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    // ref/link documents approach
    // create() {
    //   const doc = {
    //     name: this.name,
    //     age: this.age,
    //     gender: this.gender
    //   };

    //   return db.collection('customers').insertOne(doc, { w: 1, j: true })
    //     .then((result) => result.ops) 
    //     .catch((error) => error);
    // }

    // embedded documents approach
    create() {
      const doc = {
        name: this.name,
        age: this.age,
        gender: this.gender
      }

      return db.collection('customers').insertOne(doc, { w: 1, j: true })
        .then((result) => result.ops)
        .catch((error) => error)
    }

    // embedded documents approach
    update(customerId, identifierData) {
      db.collection('customers').findOneAndUpdate(
        { _id: ObjectId(customerId) }, 
        {
          $set: {
            identifier: identifierData
          }
        }
      )
    }
  }

  return Customer;
};

module.exports = customerModel;