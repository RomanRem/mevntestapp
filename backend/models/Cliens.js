const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  provider: {
      type: String
  },
}, {
  collection: 'clients'
});

module.exports = mongoose.model('Client', clientSchema)