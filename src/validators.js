import { toast } from "react-toastify";
import { sampleData } from "./sampleData";

export const usernameValidtor = (username) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "username") {
      if (
        username.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of username is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        username.length >
        sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of username name is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const firstNameValidator = (fname) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "fname") {
      if (
        fname.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of first name is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        fname.length >
        sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of first name is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const lastNameValidator = (lname) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "lname") {
      if (
        lname.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of last name is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        lname.length >
        sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of last name is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const emailValidator = (email) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "email") {
      const isValid = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (isValid == null) {
        toast.error(`Email is in bad format!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return false;
      }
    }
  }
};

export const dateValidator = (date) => {
  const today = new Date();
  const year = today.getFullYear();
  if (date.length < 1) {
    toast.error(`Select Date!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "birthdate") {
      if (
        year - parseInt(date.slice(0, 4)) <
        sampleData.fields[i].validators[0].parameters.age
      ) {
        toast.error(`You need to be min 18 years old.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return false;
      }
    }
  }
};

export const genderValidator = (gender) => {
  if (gender.length < 1) {
    toast.error(`Please select your gender`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }
};

export const passwordValidator = (password) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "password") {
      const isValid = password.match(
        `${sampleData.fields[i].validators[1].parameters.regex}`
      );
      if (
        password.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of password is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (isValid == null) {
        toast.error(`Password strength failed`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return false;
      }
    }
  }
};

export const passwordConfirmValidator = (password, passwrodConf) => {
  if (password != passwrodConf) {
    toast.error(`Password does not match`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }
};

export const phoneValidator = (phone) => {
  const isNumber = phone.match(/^[0-9]+$/);
  if (isNumber == null) {
    toast.error(`Enter valid phone number`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "phone") {
      if (
        phone.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of phone is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        phone.length >
        sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of phone name is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const addressValidator = (address) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "address") {
      if (
        address.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of address is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        address.length >
        sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of address is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const cityValidator = (city) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "city") {
      if (
        city.length < sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(
          `Min length of city is ${sampleData.fields[i].validators[0].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
      if (
        city.length > sampleData.fields[i].validators[1].parameters.targetLength
      ) {
        toast.error(
          `Max length of city is ${sampleData.fields[i].validators[1].parameters.targetLength}`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return false;
      }
    }
  }
};

export const countryCodeValidator = (countryCode) => {
  for (let i in sampleData.fields) {
    if (sampleData.fields[i].code === "countrycode") {
      if (
        countryCode.length <
        sampleData.fields[i].validators[0].parameters.targetLength
      ) {
        toast.error(`Please select your country code`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return false;
      }
    }
  }
};
