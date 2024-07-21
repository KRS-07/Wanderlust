const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DEFAULT_IMAGE_LINK = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const listingSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: DEFAULT_IMAGE_LINK,
        set: (v)=> v === "" ? DEFAULT_IMAGE_LINK : v,
        
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;