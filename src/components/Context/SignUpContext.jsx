import { createContext, useContext, useState, useEffect } from "react";
import { generateJWT } from "../Utils/generateJWT";
import { useNavigate } from "react-router-dom";
import {
  saveAuthDataLocalStorage,
  isEmailRegistered,
} from "../Utils/authUtils";

const SignUpContext = createContext();

export const useSignUpContext = () => {
  return useContext(SignUpContext);
};

export const SignUpProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [passwordCriteria, setPasswordCriteria] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasMinLength: false,
  });

  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[.!@#$%^&*]/;
  const minLengthRegex = /.{8,}/;

  useEffect(() => {
    setPasswordCriteria({
      hasLowerCase: lowerCaseRegex.test(form.password),
      hasUpperCase: upperCaseRegex.test(form.password),
      hasNumber: numberRegex.test(form.password),
      hasSpecialChar: specialCharRegex.test(form.password),
      hasMinLength: minLengthRegex.test(form.password),
    });
  }, [form.password]);

  const handleInputForm = (e) => {
    setForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(form);

    setErrors((prevData) => ({
      ...prevData,
      [e.target.name]: "",
    }));
  };

  const validationSignUp = () => {
    const newErrors = {};
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!form.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format!";
    } else if (isEmailRegistered(form.email)) {
      newErrors.email = "Email is already registered!";
    }
    if (!form.password) {
      newErrors.password = "Password is required!";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = "Invalid password format!";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required!";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }

    return newErrors;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newErrors = validationSignUp();
    if (Object.keys(newErrors).length === 0) {
      const token = await generateJWT(form.email, form.password);
      const user = {
        email: form.email,
        password: form.password,
        token: token,
      };
      saveAuthDataLocalStorage(user);
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <SignUpContext.Provider
      value={{
        form,
        errors,
        handleInputForm,
        passwordCriteria,
        handleSubmitForm,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
