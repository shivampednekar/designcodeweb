import React from "react"
import styled, { keyframes } from "styled-components"

import { H1, MediumText, SmallText } from "../styles/textStyles"
import { themes } from "../styles/colorStyles"
import WaveBackground from "../components/UI/backgrounds/waveBackgrounds"
import TextAnimation from "../components/UI/TextAnimation/textAnimations"
import PurchaseButton from "../components/UI/buttons/purchaseButton"
import MockupAnimation from "../components/UI/Mockup/mockupAnimation"

const HeroSection = () => {
  return (
    <Container>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code <TextAnimation /> apps{" "}
          </Title>
          <Descripation>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Descripation>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
          <Stack>
            Purchase includes access to 30+ courses, 100+ premium tutorials,
            120+ hours of videos, source files and certificates.
          </Stack>
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Container>
  )
}

export default HeroSection

// ANIMATIONS
const animation = keyframes`
  from {opacity: 0; transform: translateY(-10px); filter: blur(10px);}
  to {opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Container = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  position: relative;
  display: grid;
  grid-template-columns: 465px auto;
  margin: 0px auto;
  padding: 200px 0px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(1) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.1;

  & span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Descripation = styled(MediumText)`
  letter-spacing: 0.3px;
`

const Stack = styled(SmallText)`
  color: ${themes.dark.text2};
  max-width: 280px;
  margin: 0px;
`
