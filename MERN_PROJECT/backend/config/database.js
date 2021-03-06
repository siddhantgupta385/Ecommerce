const mongoose = require("mongoose");

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_URI,{useNewURLParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
        console.log(`MongoDB Connected woth server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase