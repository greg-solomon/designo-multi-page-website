import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
interface ValueItemProps {
  title: string;
  img: string;
  backdrop: number;
  id: string;
}

export const Locations: FC = ({}) => {
  const items = [
    {
      title: "Canada",
      img: "/assets/shared/desktop/illustration-canada.svg",
      backdrop: 1,
      id: "canada",
    },
    {
      title: "Australia",
      img: "/assets/shared/desktop/illustration-australia.svg",
      backdrop: 2,
      id: "australia",
    },
    {
      title: "United Kingdom",
      img: "/assets/shared/desktop/illustration-united-kingdom.svg",
      backdrop: 3,
      id: "uk",
    },
  ];
  return (
    <Section>
      {items.map((item, i) => (
        <LocationItem key={i} {...item} />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 87.5%;
  max-width: 1110px;
  justify-content: center;
  padding-top: 120px;
  ${({ theme }) => theme.breakpoints.desktop} {
    flex-flow: row;
    justify-content: space-evenly;
  }
`;

const LocationItem: FC<ValueItemProps> = ({ title, img, backdrop, id }) => {
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
        <Link href={`/locations#${id}`}>
          <Button variant="dark">See Location</Button>
        </Link>
      </div>
    </Article>
  );
};

const Article = styled.article`
  text-align: center;
  margin-bottom: 5rem;
  &:last-child {
    margin-bottom: 0;
  }
  .content {
    flex-flow: column nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .backdrop-1 {
    /* Oval Copy 3 */

    position: absolute;
    width: 202px;
    height: 202px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    transform: matrix(0, -1, -1, 0, 0, 0);
  }

  .backdrop-2 {
    /* Oval Copy 3 */

    position: absolute;
    width: 202px;
    height: 202px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .backdrop-3 {
    /* Oval Copy 3 */

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

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

/* Oval */
