const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    class: { type: String },
    phoneNumber: { type: String },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
