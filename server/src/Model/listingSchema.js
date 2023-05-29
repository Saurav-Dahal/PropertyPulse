
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    bedrooms: {type: Number, min: 1, max: 50, default: 1},
    bathrooms: {type: Number, min: 1, max: 50, default: 1},
    parking: {type: Boolean, default: false},
    furnished: {type: Boolean, default: false},
    address: {type: String, required: true},
    offers: {type: Boolean, default: false},
    regularPrice: {type: Number, min: 0, max: '1000000000', required: true},
    discountedPrice: {type: Number, min: 0, max: '1000000000', default: 0},
    coverImage: {type: String, required: true},
    images: { type : Array , "default" : [] }
},
{
    collection: "listings"
});


const Listings = mongoose.model('Listing', listingSchema);
module.exports = Listings;