const StudentModel = require('../models/student_model'); 
const connectDB = require('../database/connection'); 

exports.registerStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const studentDBURI = process.env.STUDENT_DB_URI;
        connectDB(studentDBURI); 
        const newStudent = new StudentModel(studentData);
        await newStudent.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering student" });
    }
};
