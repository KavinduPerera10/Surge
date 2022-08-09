const {check}= require('express-validator');

exports.signupValidator= [
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid Email')
]

exports.validatorResult = (req,res,next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors){
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        })

        //console.log('hasErrors: ', hasErrors);
        //console.log('result: ', result);
    }
    next();
}