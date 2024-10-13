export const validate = (data, type) => {
  const err = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (type === "Login") {
    if (!emailRegex.test(data.Email)) {
      err.Email = "Email is Incourect";
    } else {
      delete err.Email;
    }
    if (!data.Password) {
      err.Password = "Password is requard";
    } else if (data.Password.length < 6) {
      err.Password = "Password must be 6 charector";
    } else {
      delete err.Password;
    }
    return err;
  } else {
    if (!data.Name.trim()) {
      err.Name = "Name is Incourect";
    } else {
      delete err.Name;
    }   if (!emailRegex.test(data.Email)) {
      err.Email = "Email is Incourect";
    } else {
      delete err.Email;
    }
    if (!data.Password) {
      err.Password = "Password is requard";
    } else if (data.Password.length < 6) {
      err.Password = "Password must be 6 charector";
    } else {
      delete err.Password;
    }
    if (!data.ConfirmPassword) {
      err.ConfirmPassword = "Confirm Password is requard";
    } else if (data.Password !== data.ConfirmPassword) {
      err.ConfirmPassword = "Email Not Match";
    } else {
      delete err.ConfirmPassword;
    }
    if (!data.AcceptTerms) {
      err.AcceptTerms = "You must Accept terms";
    } else {
      delete err.AcceptTerms;
    }

    return err;
  }
};
