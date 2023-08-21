const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    schoolName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    location: { type: String, required: true },
    password: { type: String, required: true }
});

const SchoolModel = mongoose.model('School', SchoolSchema);
module.exports = SchoolModel;
