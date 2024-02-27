const express = require("express");
const productsRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

 
// This route gets a list of all the products.
productsRoutes.route("/products").get(async (req, res) => {
    let db_connect = dbo.getDb();
    let data = await db_connect.collection("products").find({}).toArray();
    res.json(data)
});

module.exports = productsRoutes;