const { body } = require('express-validator');

const validations = () => {
  return [
    body('firstName')
      .exists()
      .withMessage('firstName is required'),
    body('lastName')
      .exists()
      .withMessage('lastName is required'),
    body('userName')
      .exists()
      .withMessage('userName is required'),
    body('phone')
      .isMobilePhone()
      .withMessage('phone number is not valid'),
    body('email')
      .exists({ checkFalsy: true })
      .withMessage('Email is required')
      .bail()
      .isEmail()
      .withMessage('Email is invalid'),
    body('password')
      .exists()
      .withMessage('Password is required')
      .isLength({ min: 10 })
      .withMessage("Password must be minimum 10 characters"),
  ];
};

module.exports = {
    validations
};
