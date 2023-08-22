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
    res.render('login', { success: req.query.success });
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


module.exports = {
    aboutUs,
    contactUs,
    login,
    chooseProfile,
    home_pg,
    StudentRegistrationForm,
    TeacherRegistrationForm,
    SchoolRegistrationForm
};
