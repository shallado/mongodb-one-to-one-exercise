// _id, cardCode = last 7 digits of the customer_id associated with this identifer

const identifierModel = (db) => {
  class Identifier {
    // ref documents approach
    // constructor(cardCode, user_id) {
    //   this.user_id = user_id;
    //   this.cardCode = cardCode;
    // }

    // embedded documents approach
    constructor(cardCode, user_id) {
      this.cardCode = cardCode;
    }

    // approach is ref/link documents approach
    // create() {
    //   const doc = {
    //     user_id: this.user_id,
    //     cardCode: this.cardCode
    //   };

    //   return db.collection('identifiers').insertOne(doc, { w: 1, j: true })
    //     .then((result) => result.ops)
    //     .catch((error) => error);
    // };
  }

  return Identifier;
};

module.exports = identifierModel;