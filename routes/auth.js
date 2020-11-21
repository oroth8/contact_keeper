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
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json
        }
    }catch (err){}
});


module.exports = router;