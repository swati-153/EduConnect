const express = require('express');
const route = express.Router();

const services = require('../services/render');

route.get('/', services.home_pg);
route.get('/about-us', services.aboutUs);
route.get('/contact-us', services.contactUs);
route.get('/login', services.login);
route.get('/choose-profile', services.chooseProfile);
route.get('/register-student', services.StudentRegistrationForm);
route.get('/register-teacher', services.TeacherRegistrationForm);
route.get('/register-school', services.SchoolRegistrationForm);

module.exports = route

