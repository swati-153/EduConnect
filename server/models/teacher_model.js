const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: { type: String },
    qualification: { type: String },
    teachingExperience: { type: Number },
    phoneNumber: { type: String },
    email: { type: String, unique: true, lowercase: true },
    availabilityLocation:  { type: String },
    password: { type: String }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
