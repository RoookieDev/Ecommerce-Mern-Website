const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userEmail:String,
    product_name:Number,
    quantity:Number
},{
    collection:"UserCart",
})

module.exports=mongoose.model("UserCart", cartSchema);