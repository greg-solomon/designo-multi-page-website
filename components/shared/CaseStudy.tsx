import React from "react";
import styled, { useTheme } from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Heading } from "../ui/Heading";

interface CaseStudyProps {
  image: string;
  title: string;
  body: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = (props) => {
  const theme = useTheme();
  return (
    <Container>
      <img src={props.image} alt={`${props.title} screenshot`} />
      <Info>
        <Heading
          variant="tertiary"
          css={{ color: theme.primary.main }}
          emphasis
        >
          {props.title}
        </Heading>
        <BodyText>{props.body}</BodyText>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  img {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;

    img {
      width: 50%;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

const Info = styled.div`
  background-color: #fdf3f0;
  padding-top: 2.25rem;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  h3 {
    margin-bottom: 1.5rem;
  }
  p {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary.main};

    h3,
    p {
      color: ${({ theme }) => theme.primary.light};
    }
  }
`;
