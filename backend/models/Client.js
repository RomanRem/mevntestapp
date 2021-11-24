const mongoose = require("mongoose");
const {Schema, Types} = mongoose;


let providerSchema = new Schema({
  
  name: {
   type: String
},
});
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
    providers:[{
      type: Types.ObjectId,
      ref: 'Provider'
    }],
  },
   {
    collection: "clients",
   });
//clientSchema.index({ email: 1 }, { unique: true });
//providerSchema.index({ name: 1 }, { unique: true });
module.exports = mongoose.model("Client", clientSchema);
module.exports = mongoose.model('Provider', providerSchema);