const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(LoginData) {
	
  let errors = {};

  LoginData.email = !isEmpty(LoginData.email) ? LoginData.email : "";
  LoginData.password = !isEmpty(LoginData.password) ? LoginData.password : "";

  if (Validator.isEmpty(LoginData.email)) {
	errors.email = "Email field is required";
  } else if (!Validator.isEmail(LoginData.email)) {
	errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(LoginData.password)) {
	errors.password = "Password field is required";
  }
  
	return {
		errors,
		isValid: isEmpty(errors)
	};
};