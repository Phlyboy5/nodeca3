const mongoose = require('mongoose');
const trackerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'A description is a  must'],
    },
    exp:{
        type:String,
        required:[true , 'A description is a  must'],
    },
    price:{
        type:Number,
        required:[true , 'A description is a  must'],
    },
    createdAt:{
        type: Date,
        default:Date.now(),
    }
});

const Tracker = mongoose.model('tracker', trackerSchema);
module.exports = Tracker;