import React, { FC } from "react";
import styled from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Heading } from "../ui/Heading";

interface GenericLandingProps {
  title: string;
  body: string;
}
export const GenericLanding: FC<GenericLandingProps> = ({ title, body }) => {
  return (
    <Container>
      <img src="/assets/web-design/desktop/bg-pattern-intro-web.svg" />
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
  min-height: 292px;
  background-color: ${({ theme }) => theme.primary.main};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-bottom: 6.25rem;
  z-index: -2;
  p {
    max-width: 60%;
    text-align: center;
    margin: 0 auto;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    padding: 0 9rem;
    border-radius: 15px;

    img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    img {
      left: 60%;
      top: 50%;
    }
  }
`;
