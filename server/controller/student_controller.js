const bcrypt = require('bcrypt');
const StudentModel = require('../models/student_model');
const connectDB = require('../database/connection');

const registerStudentCallback = async (req, res) => {
    try {
        const studentData = req.body;
        
        const DBURI = process.env.EDUCONNECT_DB_URI;
        connectDB(DBURI);
        
        const newStudent = new StudentModel(studentData);
        await newStudent.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering student" });
    }
};

const loginStudentCallback = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const DBURI = process.env.EDUCONNECT_DB_URI;
        connectDB(DBURI);
        
        const student = await StudentModel.findOne({ email, password });
        
        if (student) {
            const passwordMatch = await bcrypt.compare(password, student.password);
            if (passwordMatch) {
                req.session.user = student;
                res.redirect('/student-dashboard');
            } else {
                console.log('invalid credentials');
                res.redirect('/login?error=invalid_credentials');
            }
        } else {
            console.log('invalid credentials');
            res.redirect('/login?error=invalid_credentials');
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while logging in" });
    }
};


const studentDashboardCallback = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const student = req.session.user;
    res.render('student_dashboard', { student });
};

module.exports = {
    registerStudent: registerStudentCallback,
    loginStudent: loginStudentCallback,
    studentDashboard: studentDashboardCallback
};
