const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    phone: String,
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

UserSchema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['password'];
        return ret;
    },
});

module.exports = mongoose.model('UserModel', UserSchema);
