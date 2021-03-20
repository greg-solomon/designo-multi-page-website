import React, { FC } from "react";
import styled from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

export const CTA: FC = ({}) => {
  return (
    <Wrapper>
      <div className="cta-content">
        <div>
          <Heading color="light" variant="secondary">
            Let's talk about your project
          </Heading>
          <BodyText color="light">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </BodyText>
        </div>
        <Button>Get in Touch</Button>
      </div>
      <img src="/assets/shared/desktop/bg-pattern-call-to-action.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 87.2%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.primary.main};
  border-radius: 15px;
  max-width: 1110px;
  padding: 4rem 1.5rem;
  position: relative;
  transform: translateY(20%);
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .cta-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  img {
    position: absolute;
    top: -3.75rem;
    left: -13.5rem;
    user-select: none;
    z-index: -40;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    img {
      h2,
      p {
        width: 75%;
      }

      left: 12rem;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 4rem 6rem;
    max-height: 292px;

    img {
      left: 15rem;
      top: -8rem;
    }

    .cta-content {
      flex-direction: row;
      align-items: center;
      text-align: left;
      justify-content: space-between;

      div {
        width: 50%;
      }
    }
  }
`;
