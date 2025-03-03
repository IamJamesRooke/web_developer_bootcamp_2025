const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection open!!")
    })
    .catch(err => {
        console.log("Error!!")
        console.log(err)
    })
    
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxLength: 20
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }
    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({ name: 'Mountain Bike', price: 599});
    bike.save()
        .then(data => {
            console.log("It worked!")
            console.log(data);
        })
        .catch(err => {
            console.log("Error!")
            console.log(err);
        })