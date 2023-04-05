const mongoose = require('mongoose');
//const mongoURI = "mongodb://127.0.0.1:27017/mydb";
const mongoURI ="mongodb://localhost:27017/mydb"



const connecttomongo= () =>{
    mongoose.connect(mongoURI)
}

module.exports = connecttomongo;