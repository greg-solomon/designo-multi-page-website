import React, { FC } from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { BodyText } from "../ui/BodyText";
export const AboutLanding: FC = ({}) => {
  return (
    <Container>
      <Content>
        <img
          src="/assets/about/mobile/bg-pattern-hero-about-mobile.svg"
          className="backdrop-img-mobile"
        />
        <img
          src="/assets/about/desktop/bg-pattern-hero-about-desktop.svg"
          className="backdrop-img-desktop"
        />
        <div>
          <Heading color="light">About us</Heading>
          <BodyText color="light">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </BodyText>
        </div>
      </Content>
      <img
        src="/assets/about/mobile/image-about-hero.jpg"
        className="landing-display-img-mobile"
      />
      <img
        src="/assets/about/tablet/image-about-hero.jpg"
        className="landing-display-img-tablet"
      />
      <img
        src="/assets/about/desktop/image-about-hero.jpg"
        className="landing-display-img-desktop"
      />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;

  .landing-display-img-mobile {
    height: 100%;
    object-fit: cover;
  }

  .landing-display-img-desktop,
  .landing-display-img-tablet {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 1.5rem;

    .landing-display-img-mobile {
      display: none;
    }

    .landing-display-img-tablet {
      display: block;
      height: 320px;
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    .landing-display-img-mobile {
      display: none;
    }

    .landing-display-img-tablet {
      display: block;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-flow: row;
    height: 478px;

    .landing-display-img-tablet {
      display: none;
    }

    .landing-display-img-desktop {
      display: block;
    }
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.primary.main};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.5rem;
  z-index: 0;
  overflow: hidden;
  position: relative;

  .backdrop-img-mobile,
  .backdrop-img-desktop {
    position: absolute;
    top: -40%;
    left: -50%;
    z-index: -1;
  }

  .backdrop-img-desktop {
    display: none;
    top: -130%;
    left: -15%;
  }

  div {
    width: 90%;
    max-width: 458px;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    height: 310px;

    .backdrop-img-desktop {
      display: block;
    }

    .backdrop-img-mobile {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 60%;
    height: 100%;
    text-align: left;
    .landing-displayt-img-desktop {
      width: 40%;
      height: 100%;
    }

    .backdrop-img-desktop {
      top: -35%;
      left: 0;
    }
  }
`;
