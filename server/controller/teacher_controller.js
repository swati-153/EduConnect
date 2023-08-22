const TeacherModel = require('../models/teacher_model');
const connectDB = require('../database/connection');

const registerTeacherCallback = async (req, res) => {
    try {
        const teacherData = req.body;

        const DBURI = process.env.EDUCONNECT_DB_URI;
        connectDB(DBURI);

        const newTeacher = new TeacherModel(teacherData);
        await newTeacher.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering teacher" });
    }
};

const loginTeacherCallback = async (req, res) => {
    try {
        const { email, password } = req.body;
        const DBURI = process.env.EDUCONNECT_DB_URI; 
        connectDB(DBURI);

        const teacher = await TeacherModel.findOne({ email });

        if (!teacher || teacher.password !== password) {
            return res.redirect('/login?error=invalid');
        }

        req.session.user = teacher;
        res.redirect('/teacher-dashboard');
    } catch (error) {
        res.status(500).send({ message: "Error occurred while logging in" });
    }
};


const teacherDashboardCallback = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    const teacher = req.session.user;
    res.render('teacher_dashboard', { teacher });
};

module.exports = {
    registerTeacher: registerTeacherCallback,
    loginTeacher: loginTeacherCallback,
    teacherDashboard: teacherDashboardCallback
};
