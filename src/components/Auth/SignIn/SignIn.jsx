import { useSignInContext } from "../../Context/SignInContext";
import styled from "styled-components";

const ContainerSignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignInDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em 2em;
  border-radius: 15px;
`;

const SignInTitle = styled.h1`
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

export const SignIn = ({ changeAuthType }) => {
  const { form, errors, handleInputForm, handleSubmitForm } =
    useSignInContext();
  return (
    <ContainerSignIn>
      <SignInDetails>
        <SignInTitle>Sign In</SignInTitle>
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
          {errors.general && <Errors>{errors.general}</Errors>}
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Sign In
          </SubmitButton>
          <ChangeAuth onClick={changeAuthType}>
            Don't have an account? Sign up
          </ChangeAuth>
        </Form>
      </SignInDetails>
    </ContainerSignIn>
  );
};
