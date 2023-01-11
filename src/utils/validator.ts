import { emailRegex } from "./config";

const validateEmail = (email: string, errors: any) => {
  if (!email) {
    return (errors.email = "Email cannot be empty");
  } else if (!emailRegex.test(email)) {
    return (errors.email = "Please put in a valid email");
  }
  errors.email = "";
};

const validatePassword = (password: string, errors: any) => {
  if (!password) {
    return (errors.password = "Password cannot be empty");
  } else if (password.length < 8) {
    return (errors.password = "Password cannot be less than 8 characters");
  }
  errors.password = "";
};

const validator = (values: any, fieldName: string) => {
  let errors = {};
  switch (fieldName) {
    case "email":
      validateEmail(values.email, errors);
      break;

    case "password":
      validatePassword(values.password, errors);
      break;
  }
  return errors;
};
export default validator;
