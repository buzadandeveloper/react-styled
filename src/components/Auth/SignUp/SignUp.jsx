import { useSignUpContext } from "../../Context/SignUpContext";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";

const ContainerSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em 2em;
  border-radius: 15px;
`;

const SignUpTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1em;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 0.7em;
`;

const Input = styled.input`
  padding: 0.9em 1em;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 9px;
  outline: none;
`;

const Errors = styled.span`
  color: red;
  font-size: 0.785rem;
  margin-top: -0.5em;
  padding-left: 0.5em;
`;

const PassValidation = styled.div`
  padding-left: 0.5em;
`;

const Criteria = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.9rem;
  &.valid {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5em;
  border-radius: 0.5em;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.shade};
  }
`;

const ChangeAuth = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SignUp = ({ changeAuthType }) => {
  const { form, errors, handleInputForm, passwordCriteria, handleSubmitForm } =
    useSignUpContext();
  return (
    <ContainerSignUp>
      <SignUpDetails>
        <SignUpTitle>Sign Up</SignUpTitle>
        <Form>
          <Input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleInputForm}
          />
          {errors.email && <Errors>{errors.email}</Errors>}
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputForm}
          />
          {errors.password && <Errors>{errors.password}</Errors>}
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleInputForm}
          />
          {errors.confirmPassword && <Errors>{errors.confirmPassword}</Errors>}
          <PassValidation>
            <Criteria className={passwordCriteria.hasLowerCase ? "valid" : ""}>
              <FaRegCheckCircle /> At least one lowercase letter
            </Criteria>
            <Criteria className={passwordCriteria.hasUpperCase ? "valid" : ""}>
              <FaRegCheckCircle /> At least one uppercase letter
            </Criteria>
            <Criteria className={passwordCriteria.hasNumber ? "valid" : ""}>
              <FaRegCheckCircle /> At least one number
            </Criteria>
            <Criteria
              className={passwordCriteria.hasSpecialChar ? "valid" : ""}
            >
              <FaRegCheckCircle /> At least one special charcter
            </Criteria>
            <Criteria className={passwordCriteria.hasMinLength ? "valid" : ""}>
              <FaRegCheckCircle /> At least 8 characters
            </Criteria>
          </PassValidation>
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Sign Up
          </SubmitButton>
          <ChangeAuth onClick={changeAuthType}>
            Already have an account? Sign In
          </ChangeAuth>
        </Form>
      </SignUpDetails>
    </ContainerSignUp>
  );
};
