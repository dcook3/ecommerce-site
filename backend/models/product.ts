var mongoose = require('mongoose')

//example
const productSchema = new mongoose.Schema ({
    id: Number,
    title: String,
    price: String,
    description: String,
    category: String,
    image: Date,
    rating: {
        rate: Number,
        count: Number
    }
});
const product = mongoose.model("product", productSchema);
export default product