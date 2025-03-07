const mongoose = require('mongoose')
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Connection Error')
        console.log(err)
    })

const userSchema = new Schema({
    username: String,
    age: Number,
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const productSchema = new Schema({
       name: String,
       price: Number,
       season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter'],
       }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Blue Steele', price: 14.99, season: 'Winter'},
//     {name: 'Golden Mango', price: 0.99, season: 'Spring'},
// ])

const makeFarm = async() => {
    const farm = new Farm({ name: 'Big Farma', city: 'Springfield, OH'});
    const melon = await Product.findOne({ name: 'Goddess Melon'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Big Farma'});
    const watermelon = await Product.findOne({ name: 'Blue Steele' })
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm)
}

// addProduct();

Farm.findOne({ name: 'Big Farma'})
    .populate('products')
    .then(farm => console.log(farm))


const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async() => {
    const user = await User.findOne({username: 'chickenfan99'})
    const tweet2 = new Tweet({ text: 'Boooooooo!', like: 110});
    tweet2.user = user;
    user.save();
    tweet2.save();
}

// makeTweets();