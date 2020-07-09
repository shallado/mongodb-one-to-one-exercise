// _id, cardCode = last 7 digits of the customer_id associated with this identifer

const identifierModel = (db) => {
  class Identifier {
    constructor(cardCode, user_id) {
      this.user_id = user_id;
      this.cardCode = cardCode;
    }

    create() {
      const doc = {
        user_id: this.user_id,
        cardCode: this.cardCode
      };

      return db.collection('identifiers').insertOne(doc, { w: 1, j: true })
        .then((result) => result.ops)
        .catch((error) => error);
    };
  }

  return Identifier;
};

module.exports = identifierModel;