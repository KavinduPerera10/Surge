const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/keys');

exports.signupController = async (req,res) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }

        const newUser = new User();
        newUser.email=email;

        //const salt = await bcrypt.genSalt(10);

        await newUser.save();

        res.json({
            successMessage: 'Check your Email to Sign In',
        });

    } catch (err) {
        console.log('signupController error: ', err);
        res.status(500).json({
            errorMessage: 'Server Error',
        });
    }
};

exports.signinController = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await user.findOne({email});
        if (!user) {
            return res.status(400).json({
                errorMessage: 'Invalid Credentials',
            });
        }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        return res.status(500).json({
            errorMessage: 'Invalid Credentials',
        });
    }

    const payload = {
        user: {
        _id: user._id,
        },
    };

    jwt.sign(payload, jwtSecret, {expiresIn: jwtExpire}, (err, token) => {
        if (err) console.log('jwt error ', err);
        const {_id, email, role} = user;

        res.json({
            token,
            user: {_id, email, role},
        });
    })

    } catch (err) {
        console.log('signin Controller error', err);
        res.status(500).json({
            errorMessage: 'Server Error',
        });
    }
};