import styled, { keyframes } from "styled-components";
import logo1 from "../../assets/clients/logo1.svg";
import logo2 from "../../assets/clients/logo2.svg";
import logo3 from "../../assets/clients/logo3.svg";
import logo4 from "../../assets/clients/logo4.svg";
import logo5 from "../../assets/clients/logo5.svg";
import logo6 from "../../assets/clients/logo6.svg";

const ContainerClients = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`;

const ContainerDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const OurClientsText = styled.h2`
  color: ${({ theme }) => theme.colors.d_grey};
  font-size: 1.875rem;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1rem;
`;

const ContainerLogo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  width: 800px; 
`;

const move = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  gap: 5em;
  animation: ${move} 20s linear infinite;
  width: calc(100% * 2); 
  margin-top: 2em;
`;

const LogoImg = styled.img`
  width: 60px;
  height: 40px;
`;

export const OurClients = () => {
  return (
    <ContainerClients>
      <ContainerDetails>
        <ContainerText>
          <OurClientsText>Our Clients</OurClientsText>
          <Info>We have been working with some Fortune 500+ clients</Info>
        </ContainerText>
        <ContainerLogo>
          <LogosWrapper>
            <LogoImg src={logo1} />
            <LogoImg src={logo2} />
            <LogoImg src={logo3} />
            <LogoImg src={logo4} />
            <LogoImg src={logo5} />
            <LogoImg src={logo6} />
            <LogoImg src={logo1} />
            <LogoImg src={logo2} />
            <LogoImg src={logo3} />
            <LogoImg src={logo4} />
            <LogoImg src={logo5} />
            <LogoImg src={logo6} />
          </LogosWrapper>
        </ContainerLogo>
      </ContainerDetails>
    </ContainerClients>
  );
};
