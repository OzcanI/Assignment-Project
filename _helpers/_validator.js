const { body, validationResult } = require('express-validator');

validateUser = [
    body('email').isEmail(), //No valıdations were specified, so I have just used email and birthday.
    body('birthday').isDate(),
]

genericValidate = validations =>{
    return async (req, res, next)=>{
        for(let validation of validations){
            const result = await validation.run(req);
            if (result.errors.length) {
                //console.log(result.errors); 
                break;
            }
        }

        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        
        res.status(400).json({ errors: errors.array() });
    }
}

exports.validateUser = genericValidate(validateUser)