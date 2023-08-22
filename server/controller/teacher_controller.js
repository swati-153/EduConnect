const TeacherModel = require('../models/teacher_model'); 
const connectDB = require('../database/connection');
exports.registerTeacher = async (req, res) => {
    try {
        const teacherData = req.body;
        const teacherDBURI = process.env.TEACHER_DB_URI;
        connectDB(teacherDBURI);
        const newTeacher = new TeacherModel(teacherData);
        await newTeacher.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering teacher" });
    }
};
