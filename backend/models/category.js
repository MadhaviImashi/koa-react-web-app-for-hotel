const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    ]
})

module.exports = mongoose.model('Category', categorySchema);