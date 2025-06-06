// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Import the cities data from the cities file
const cities = require('./cities');

// Import places and descriptors arrays from the seedHelpers file
const { places, descriptors } = require('./seedHelpers');

// Import the Campground model
const Campground = require('../models/campground');

// Connect to the MongoDB database named 'yelp-camp'
mongoose.connect('mongodb://localhost:27017/yelp-camp');

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "connection error:"));

// Bind connection to open event (to get notification when connection is successful)
db.once("open", () => {
    console.log("Database connected");
});

// Function to get a random element from an array
const sample = array => array[Math.floor(Math.random() * array.length)];

// Async function to seed the database
const seedDB = async () => {
    try {
        // Delete all existing campgrounds
        await Campground.deleteMany({});
        
        // Loop to create 50 new campgrounds
        for (let i = 0; i < 50; i++) {
            // Get a random index for cities array
            const random1000 = Math.floor(Math.random() * 1000);
            
            // Random price generated
            const price = Math.floor(Math.random() * 20) + 10;

            // Create a new campground with random location and title
            const camp = new Campground({
                
                // Your User ID, hard coded
                author: '67ec09267aea49c46edf4196',
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus vel sequi at? Rem modi dignissimos aliquam itaque a suscipit.',
                price: price,
                geometry: { 
                    type: 'Point', 
                    coordinates: [ 
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ] 
                },
                images: [
                    {
                      url: 'https://res.cloudinary.com/dvllefkx8/image/upload/v1743703902/YelpCamp/c9oe08tw3nqw9xsqt64d.png',
                      filename: 'YelpCamp/c9oe08tw3nqw9xsqt64d',
                    },
                    {
                      url: 'https://res.cloudinary.com/dvllefkx8/image/upload/v1743703903/YelpCamp/erxr2p66chksfxvfxoji.jpg',
                      filename: 'YelpCamp/erxr2p66chksfxvfxoji',
                    }
                  ],
            });
            
            // Save the new campground to the database
            await camp.save();
        }
    } catch (err) {
        console.error("Error seeding the database:", err);
    }
}

// Call the seedDB function and close the database connection when done
seedDB().then(() => {
    mongoose.connection.close();
});