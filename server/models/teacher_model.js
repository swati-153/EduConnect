const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    teachingExperience: { type: Number, min: 0 },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    availabilityLocation:  { type: String, required: true },
    password: { type: String, required: true }
});


const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
