import { NavBar } from "../NavBar/NavBar";
import styled from "styled-components";
import home from "../../assets/home.svg";

const ContainerIntroHome = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
`;
const IntroContent = styled.div`
  width: 1400px;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
`;
const ContainerIntroInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const Text = styled.h1`
  color: ${({ theme }) => theme.colors.d_grey};
  font-size: 3rem;
  &.primary-color {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Description = styled.p`
  font-size: 0.9em;
  font-weight: 400;
  width: 80%;
  color: ${({ theme }) => theme.colors.grey};
`;

const HomeImage = styled.img`
  width: 350px;
  max-width: 100%;
`;

export const Home = () => {
  return (
    <>
      <NavBar />
      <ContainerIntroHome>
        <IntroContent>
          <ContainerIntroInfo>
            <Text>Lessons and insights</Text>
            <Text className="primary-color">from 8 years</Text>
            <Description>
              Boost your photography business with our advanced tools. Enhance
              your online presence through a sleek website and dynamic social
              media features. Elevate your brand and reach more clients
              effortlessly.
            </Description>
          </ContainerIntroInfo>
          <HomeImage src={home} />
        </IntroContent>
      </ContainerIntroHome>
    </>
  );
};
