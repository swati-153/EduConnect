const SchoolModel = require('../models/school_model');
const connectDB = require('../database/connection'); 

exports.registerSchool = async (req, res) => {
    try {
        const schoolData = req.body;
        const schoolDBURI = process.env.SCHOOL_DB_URI;
        connectDB(schoolDBURI); 
        const newSchool = new SchoolModel(schoolData);
        await newSchool.save();
        res.redirect('/login?success=registration');
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred while registering school" });
    }
};

