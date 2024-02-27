const { MongoClient } = require("mongodb");
const connectString = process.env.ATLAS_URI;
const client = new MongoClient(connectString);
 
var _db;
 
module.exports = {
    connectToServer: async () => {
        await client.connect()
        .then(() => {
            _db = client.db("EcommerceApp");
            console.log("Connection to MongoDB has been successfully established.");
        })
        .catch((err) => {
            return err;
        })
},
    closeConnection: async () => {
        await client.close()
        .then(() => {
            console.log("Connection to MongoDB has been successfully closed.");
        })
        .catch((err) => {
            console.error("MongoDB connection close error: " + err);
        })
    },
    getDb: () => {
        if(_db !== undefined){
            return _db;
        }
        else{
            console.error("_db doesn't exist!")
            throw new Error("Called a database object when not defined or void.")
        }
    },
};