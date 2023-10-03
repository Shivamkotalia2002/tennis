const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    firstname :{
        type:String, 
        required:true
    },
    city: {
        type:String,
        required:true
    },
    dob: {
        type:Date,
        required:true
    },
    whatsapp: {
        type:String,
        required:true
    },
    events: {
        type:String,
        required:true
    },
    PartnerName: {
        type:String,
    },
    dinner: {
        type:String,
        required:true
    },
    drink: {
        type:String,
        required:true
    },
    partnerCode: {
        type:String,
    }
})

const Tennis = new mongoose.model("Tennis", playerSchema);

module.exports = Tennis;
