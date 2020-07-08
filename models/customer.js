// name, age, gender
const customerModel = (db) => {
  class Customer {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    create() {
      const doc = {
        name: this.name,
        age: this.age,
        gender: this.gender
      };

      return db.collection('customers').insertOne(doc, { w: 1, j: true })
        .then((result) => result.ops) 
        .catch((err) => err);
    }
  }

  return Customer;
};

module.exports = customerModel;