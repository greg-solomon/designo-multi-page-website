import React, { FC } from "react";
import styled from "styled-components";
import { BodyText } from "../ui/BodyText";
import { Heading } from "../ui/Heading";

interface ValueItemProps {
  title: string;
  text: string;
  img: string;
  backdrop: number;
}

export const Values: FC = ({}) => {
  const items = [
    {
      title: "Passionate",
      text:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      img: "/assets/home/desktop/illustration-passionate.svg",
      backdrop: 1,
    },
    {
      title: "Resourceful",
      text:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      img: "/assets/home/desktop/illustration-resourceful.svg",
      backdrop: 2,
    },
    {
      title: "Friendly",
      text:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      img: "/assets/home/desktop/illustration-friendly.svg",
      backdrop: 3,
    },
  ];
  return (
    <Section>
      {items.map((item, i) => (
        <ValueItem key={i} {...item} />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 4rem;
  width: 87.2%;
  max-width: 1110px;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-wrap: nowrap;
  }
`;

const ValueItem: FC<ValueItemProps> = ({ title, text, img, backdrop }) => {
  return (
    <Article>
      <div className="img-wrap">
        <div className={`backdrop-${backdrop}`} />
        <img src={img} alt={`${title} illustration`} />
      </div>
      <div className="content">
        <Heading variant="tertiary" emphasis>
          {title}
        </Heading>
        <BodyText>{text}</BodyText>
      </div>
    </Article>
  );
};

const Article = styled.article`
  text-align: center;

  .img-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .backdrop-1 {
    position: absolute;
    width: 202px;
    height: 202px;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    border-radius: 50%;
    z-index: -5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .backdrop-2 {
    position: absolute;
    width: 202px;
    height: 202px;

    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    transform: matrix(0, 1, 1, 0, 0, 0);
    border-radius: 50%;
    z-index: -5;
  }

  .backdrop-3 {
    position: absolute;
    width: 202px;
    height: 202px;

    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    transform: matrix(0, -1, -1, 0, 0, 0);
    border-radius: 50%;
    z-index: -5;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    margin: 0rem auto;
    .content {
      padding-left: 3rem;
      text-align: left;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      text-align: center;
      padding: 0 1.5rem;
    }
  }
`;

/* Oval */
