const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    code: {
        type: String
    },
    amount: {
        type: Number 
    },
    wing: {
        type: String
    },
    pax: {
        type: Number
    },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
})

module.exports = mongoose.model('Room', roomSchema);