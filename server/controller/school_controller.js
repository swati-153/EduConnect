const SchoolModel = require('../models/school_model'); 
const connectDB = require('../database/connection');

const registerSchoolCallback = async (req, res) => {
    try {
        const schoolData = req.body;

        const DBURI = process.env.EDUCONNECT_DB_URI; 
        connectDB(DBURI);

        const newSchool = new SchoolModel(schoolData);
        await newSchool.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering school" });
    }
};


const loginSchoolCallback = async (req, res) => {
    try {
        const { email, password } = req.body;
        const DBURI = process.env.EDUCONNECT_DB_URI; 
        connectDB(DBURI);

        const school = await SchoolModel.findOne({ email });

        if (!school || school.password !== password) {
            return res.redirect('/login?error=invalid');
        }

        req.session.user = school;
        res.redirect('/school-dashboard');
    } catch (error) {
        res.status(500).send({ message: "Error occurred while logging in" });
    }
};

const schoolDashboardCallback = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    const school = req.session.user;
    res.render('school_dashboard', { school });
};

module.exports = {
    registerSchool: registerSchoolCallback,
    loginSchool: loginSchoolCallback,
    schoolDashboard: schoolDashboardCallback
};
