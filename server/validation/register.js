const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(RegistrationData) {
    let errors = {};
  
    RegistrationData.name = !isEmpty(RegistrationData.name) ? RegistrationData.name : "";
    RegistrationData.email = !isEmpty(RegistrationData.email) ? RegistrationData.email : "";
    RegistrationData.password = !isEmpty(RegistrationData.password) ? RegistrationData.password : "";
    RegistrationData.password2 = !isEmpty(RegistrationData.password2) ? RegistrationData.password2 : "";

 
    if (Validator.isEmpty(RegistrationData.name)) {
      errors.name = "Name field is required";
    }

 
    if (Validator.isEmpty(RegistrationData.email)) {
      errors.email = "Email field is required";
    } 
    else if (!Validator.isEmail(RegistrationData.email)) {cd
      errors.email = "Email is invalid";
    }


    if (Validator.isEmpty(RegistrationData.password)) {
      errors.password = "Password field is required";
    }
    if (Validator.isEmpty(RegistrationData.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(RegistrationData.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(RegistrationData.password, RegistrationData.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
  };