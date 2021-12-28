const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// access the variable thorugh process.env.<your_var>
require('dotenv').config();

//To Process Json Data
app.use(express.json());
app.use(cors());

//Connection to MongoDb Atlas Database
function dbConnect() {
    try {
        mongoose.connect(process.env.DB_ATLAS, {
            useNewUrlParser: true,
        });
        console.log("Connected to Database");
    } catch (err) {
        console.log(err);
    }
}

//Calling the function for connection
dbConnect();

app.get('/', (req, res) => {
    res.send("Working")
})


app.listen(process.env.DB_PORT, (req, res) => {
    console.log("listening on port " + process.env.DB_PORT);
});
