var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: { type: String },
    avatar: String,
    googleId: String,
    homes: {
        type: Schema.Types.ObjectId,
        ref: 'Homes'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);