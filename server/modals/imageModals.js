const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
   image:String
},{
    collection:"ImageData",
})

module.exports=mongoose.model("ImageData",imageSchema);