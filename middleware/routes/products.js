const express = require("express");
const productsRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the productss.
productsRoutes.route("/products").get(function (req, res) {
 let db_connect = dbo.getDb("products");
 db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});
 
// This section will help you get a single products by id
productsRoutes.route("/products/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
    .collection("products")
    .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = productsRoutes;