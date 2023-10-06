import mongoose from "mongoose";

const { Schema } = mongoose;

const merchSchema = new Schema({
  bandName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  //   venueAddress: {
  //     type: String,
  //     required: true,
  //   },
  size: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  shopLink: {
    type: String,
    required: true,
  },
});

const Event = mongoose.models.Merch || mongoose.model("Merch", merchSchema);

export default Merch;