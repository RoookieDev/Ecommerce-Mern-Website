const mongoose = require('mongoose');
const userSession = new mongoose.Schema({
    expires:Date,
    session:String
})

module.exports=mongoose.model("sessions",userSession);