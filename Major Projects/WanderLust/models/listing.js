const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: Sring,
        required: true,
    },    
    description: String,
    image: {
        type: String,
        set:(v) => v === "" ? "https://unsplash.com/photos/city-street-with-s-3rd-av-sign-qoGfICxc7qI" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;