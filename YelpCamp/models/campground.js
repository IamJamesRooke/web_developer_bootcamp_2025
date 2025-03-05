// This file contains the schema for the Campground model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Campground Schema
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

// Export the Campground model
module.exports = mongoose.model('Campground', CampgroundSchema);