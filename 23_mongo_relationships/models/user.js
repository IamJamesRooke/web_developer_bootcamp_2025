const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Connection Error')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true,
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',

    })
    u.addresses.push({
        street: '123 Sesame Street',
        city: 'New York',
        state: 'NY',
        country: 'United States'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: 'White House',
        city: 'Washington',
        state: 'D.C.',
        country: 'United States'
    })
    const res = await user.save();
    console.log(res)
}

addAddress('67cafd354d1e4616db1f79d7');