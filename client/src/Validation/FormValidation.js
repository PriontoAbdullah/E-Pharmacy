import openNotification from "../Helpers/Notification";

const FormValidation = (name, value) => {
  if (!value) {
    return;
  }

  switch (name) {
    case "name":
      if (!/^[a-zA-Z ]*$/.test(value)) {
        openNotification(
          "error",
          `${name} incorrect`,
          "User Name mast be only letters and spaces"
        );
        return { [name]: true };
      }
      return { [name]: false };

    case "phone":
      if (!/^\d{10}$/.test(value)) {
        openNotification(
          "error",
          `${name} incorrect`,
          "Phone Number mast be  10 digit number only"
        );
        return { [name]: true };
      }
      return { [name]: false };

    case "email":
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        openNotification(
          "error",
          `${name} incorrect`,
          "Enter a validation email address"
        );
        return { [name]: true };
      }
      return { [name]: false };

    case "password":
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        openNotification(
          "error",
          `${name} incorrect`,
          "Password must contain minimum eight characters, at least one letter, one number and one special character:"
        );
        return { [name]: true };
      }
      return { [name]: false };

    default:
      break;
  }
};

export default FormValidation;
