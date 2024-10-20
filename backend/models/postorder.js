const mongoose = require('mongoose');

const postorder = new mongoose.Schema({
    productName : {
        requried : true,
        type : String
    },
    quantity :{
        type : Number,
        required : true 
    },
    cod : {
        type : Boolean
    }
},{collection : "new_order"});

module.exports = mongoose.model('newOrder',postorder);
