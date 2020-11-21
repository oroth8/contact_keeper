const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')

const User = require('../models/Users');

// @route GET api/auth
// @desc Get logged in user
// @access private
router.get('/', (req, res) => {
    res.send("get logged in user");
});

// @route POST api/auth
// @desc Auth user and get token
// @access public
router.post('/', [
    check('email', "Please include a valid email").isEmail(),
    check('password', "Password is required")
], (req, res) => {
    res.send("logged in user");
});


module.exports = router;