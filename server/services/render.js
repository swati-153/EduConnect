const home_pg = (req, res) => {
    res.render('home_pg');
};

const aboutUs = (req, res) => {
    res.render('about_us');
};

const contactUs = (req, res) => {
    res.render('contact_us');
};

const login = (req, res) => {
    const errorMessage = req.query.error === 'invalid_credentials' ? 'Invalid email or password' : '';
    res.render('login', { success: req.query.success, errorMessage });
};


const chooseProfile = (req, res) => {
    res.render('choose_profile');
};

const StudentRegistrationForm = (req, res) => {
    res.render('student/student_regn_form');
};

const TeacherRegistrationForm = (req, res) => {

    res.render('teacher/teacher_regn_form');
};

const SchoolRegistrationForm = (req, res) => {
    res.render('school/school_regn_form');
};

const StudentDashboard = (req, res) => {
    res.render('student/student_dashboard', { success: req.query.success });
}


module.exports = {
    aboutUs,
    contactUs,
    login,
    chooseProfile,
    home_pg,
    StudentRegistrationForm,
    TeacherRegistrationForm,
    SchoolRegistrationForm,
    StudentDashboard
};
