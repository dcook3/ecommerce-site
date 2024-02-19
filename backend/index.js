const mongoose = require("mongoose");

const env = require("dotenv").config().parsed;

const connectionParams = {
  
};
mongoose.set('strictQuery', true);
const uri = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@se373cluster.2qcqr3x.mongodb.net/EcommerceApp?retryWrites=true&w=majority`;

const connextion = mongoose
    .connect(uri, connectionParams)
    .then(() => {
    console.log("Connected to database");
    })
    .catch((err) => {
    console.log("Error connecting to the database", err);
    });

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

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listening at port 5000");
app.use(express.json());
app.use(cors());
app.get("/products", (req, resp) => {
    var products = product.find().all().exec();
    products.then(resp => {return resp})
});