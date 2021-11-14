const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let clientSchema = new Schema(
  
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    providers: {
      type: String,
    },
  },
  {
    collection: "clients",
  }
);
clientSchema._id instanceof mongoose.Types.ObjectId;
module.exports = mongoose.model("Client", clientSchema);
