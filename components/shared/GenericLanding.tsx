import React, { FC } from "react";
import styled from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Heading } from "../ui/Heading";

interface GenericLandingProps {
  title: string;
  body: string;
}
export const GenericLanding: FC<GenericLandingProps> = ({
  title,
  body,
  children,
}) => {
  return (
    <Container>
      <img
        src="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
        className="landing-bg-mobile"
      />
      <img
        src="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
        className="landing-bg-tablet"
      />
      {children}
      <div>
        <Heading color="light">{title}</Heading>
        <BodyText color="light">{body}</BodyText>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  background-color: ${({ theme }) => theme.primary.main};
  text-align: center;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-bottom: 6.25rem;
  z-index: -2;
  p {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  .landing-bg-tablet,
  .landing-bg-mobile {
    position: absolute;
    z-index: -1;
  }

  .landing-bg-tablet {
    display: none;
  }

  .landing-bg-mobile {
    top: 0;
    right: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    padding: 0 9rem;
    border-radius: 15px;
    height: 252px;

    .landing-bg-mobile {
      display: none;
    }

    .landing-bg-tablet {
      display: block;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    .landing-bg-tablet {
      display: none;
    }
  }
`;
