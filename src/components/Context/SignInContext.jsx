import { createContext, useContext, useState } from "react";
import { generateJWT } from "../Utils/generateJWT";
import { useNavigate } from "react-router-dom";
import { checkAuthDataLocalStorage } from "../Utils/authUtils";

const SignInContext = createContext();

export const useSignInContext = () => {
  return useContext(SignInContext);
};

export const SignInProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputForm = (e) => {
    setForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      [e.target.name]: "",
    }));
  };

  const validationSignIn = () => {
    const newErrors = {};
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!form.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    !form.password && (newErrors.password = "Password is required.");

    console.log(newErrors);
    return newErrors;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newErrors = validationSignIn();
    if (Object.keys(newErrors).length === 0) {
        const {success, message, user } = checkAuthDataLocalStorage(form);
        if(success) {
           const token = await generateJWT(user.email, user.password);
           localStorage.setItem("token", token);
           navigate("/dashboard");
        }else{
            setErrors({general: message});
        }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <SignInContext.Provider
      value={{ form, errors, handleInputForm, handleSubmitForm }}
    >
      {children}
    </SignInContext.Provider>
  );
};
