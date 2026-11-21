const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    type: String,
    default: "https://images.pexels.com/photos/30171418/pexels-photo-30171418.jpeg",
    set: (v) => v === ""
        ? "https://images.pexels.com/photos/30171418/pexels-photo-30171418. jpeg"
        : v,
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;