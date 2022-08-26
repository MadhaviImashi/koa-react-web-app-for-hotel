const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const subjectSchema = new mongoose.Schema({
    moduleName: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
    },
    lecturerIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    academicYear: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Subject', subjectSchema);