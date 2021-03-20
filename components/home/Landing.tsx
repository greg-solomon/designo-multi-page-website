import React from "react";
import styled from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <Container>
      <img
        src="/assets/home/desktop/bg-pattern-hero-home.svg"
        aria-hidden={true}
        className="backdrop-svg"
      />
      <div>
        <Heading color="light" variant="primary">
          Award-winning custom designs and digital branding solutions
        </Heading>
        <BodyText color="light">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.{" "}
          <br />
          Find out more about our services.
        </BodyText>
        <Button>Learn More</Button>
      </div>
      <img
        src="/assets/home/desktop/image-hero-phone.png"
        alt="Image of a Phone"
        className="phone-image"
      />
    </Container>
  );
};

const Container = styled.article`
  background-color: ${({ theme }) => theme.primary.main};
  text-align: center;
  width: 100%;
  padding: 5rem 1.5rem;
  max-width: 1110px;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .backdrop-svg {
    position: absolute;
    z-index: -30;
    left: 0;
  }

  .phone-image {
    position: absolute;
    bottom: -22rem;
    z-index: -30;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 2rem;

    .backdrop-svg {
      left: 30%;
      top: 15%;
    }

    h1,
    p {
      width: 83%;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    max-height: 640px;
    align-items: center;
    justify-content: flex-start;
    padding: 0 6rem;

    div {
      max-width: 540px;
      align-items: flex-start;
      text-align: left;
    }

    .phone-image {
      right: -4rem;
      bottom: -16rem;
    }

    .backdrop-svg {
      left: 45%;
      top: 0%;
    }
  }
`;
