const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, 
{timestamps: true} 
);

const User = mongoose.model('User', UserSchema);
module.exports = User;