import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
const ContainerNav = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 1.1em 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  display: flex;
`;

const LogoText = styled.h1`
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

const NavContainerButtons = styled.div`
  display: flex;
  gap: 2em;
`;

const NavBarSimpleButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.d_grey};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.l_grey};
    transition: 0.5s ease;
  }
`;

const NavBarComplexButton = styled(NavBarSimpleButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8em 1.3em;
  border-radius: 7px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.shade};
  }
`;

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerNav>
        <Nav>
          <LogoContainer onClick={() => navigate("/")}>
            <LogoImg src={logo} />
            <LogoText>Nexcent</LogoText>
          </LogoContainer>
          <NavContainerButtons>
            <NavBarSimpleButton onClick={() => navigate("/")}>
              Home
            </NavBarSimpleButton>
            <NavBarSimpleButton>Pricing</NavBarSimpleButton>
            <NavBarComplexButton>Register Now</NavBarComplexButton>
          </NavContainerButtons>
        </Nav>
      </ContainerNav>
    </>
  );
};
