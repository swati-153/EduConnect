const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    schoolName: { type: String },
    phoneNumber: { type: String },
    email: { type: String, unique: true, lowercase: true },
    location: { type: String },
    password: { type: String }
});

const SchoolModel = mongoose.model('School', SchoolSchema);
module.exports = SchoolModel;
