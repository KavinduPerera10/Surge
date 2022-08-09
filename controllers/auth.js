const User = require('../models/User');
//const bcrypt = require('bcryptjs');

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