import { useState } from "react";
import styled from "styled-components";
import { SignUpProvider } from "../Context/SignUpContext";
import { SignUp } from "./SignUp/SignUp";
import { SignIn } from "./SignIn/SignIn";
import { SignInProvider } from "../Context/SignInContext";
const AuthContainer = styled.div`
  background: rgb(70, 205, 77);
  background: linear-gradient(
    90deg,
    rgba(70, 205, 77, 1) 0%,
    rgba(62, 240, 134, 1) 100%
  );
`;
export const Auth = () => {
  const [auth, setAuth] = useState(false);

  const changeAuthType = () => {
    auth ? setAuth(false) : setAuth(true);
  };

  return (
    <AuthContainer>
      {auth ? (
        <SignUpProvider>
          <SignUp changeAuthType={changeAuthType} />
        </SignUpProvider>
      ) : (
        <SignInProvider>
          <SignIn changeAuthType={changeAuthType} />
        </SignInProvider>
      )}
    </AuthContainer>
  );
};
