const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: String } }],
}, { timestamps: true });

const URL = mongoose.model('URL', urlSchema); // Use mongoose.model instead of mongoose.Model
module.exports = URL;
