const express = require('express');
const route = express.Router();

const services = require('../services/render');
const schoolController = require('../controller/school_controller');
const studentController = require('../controller/student_controller');
const teacherController = require('../controller/teacher_controller');


route.get('/', services.home_pg);
route.get('/about-us', services.aboutUs);
route.get('/contact-us', services.contactUs);
route.get('/login', services.login);
route.get('/choose-profile', services.chooseProfile);
route.get('/register-student', services.StudentRegistrationForm);
route.get('/register-teacher', services.TeacherRegistrationForm);
route.get('/register-school', services.SchoolRegistrationForm);

route.post('/register-student', studentController.registerStudent);
route.post('/register-teacher', teacherController.registerTeacher);
route.post('/register-school', schoolController.registerSchool);

module.exports = route

