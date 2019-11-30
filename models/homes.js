var mongoose = require('mongoose');
var Schema = mongoose.Schema

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var homeSchema = new Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    // maxOccupancy: { type: Number, required: true },
    // pricePerNight: { type: Number, required: true },
    calander: {
        type: Date,
        default: Date.now
    },
    googleId: String,
    images: [],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Homes', homeSchema)