import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { AppDesignGridItem } from "../shared/AppDesignGridItem";
import { GraphicDesignGridItem } from "../shared/GraphicDesignGridItem";
import { Heading } from "../ui/Heading";

export const Services: FC = () => {
  return (
    <Grid>
      <GridItem
        text="Web Design"
        className="web-design-item"
        url="/web-design"
      />
      <AppDesignGridItem />
      <GraphicDesignGridItem />
    </Grid>
  );
};

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-top: 7.5rem;
  justify-items: center;
  margin-bottom: 6rem;
  grid-gap: 1.5rem;
  .web-design-item {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/assets/home/mobile/image-web-design.jpg");

    &:hover,
    &:active,
    &:focus {
      background-image: linear-gradient(
          rgba(231, 129, 107, 0.5),
          rgba(231, 129, 107, 0.5)
        ),
        url("/assets/home/mobile/image-web-design.jpg");
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    .web-design-item {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("/assets/home/tablet/image-web-design.jpg");

      &:hover,
      &:active,
      &:focus {
        background-image: linear-gradient(
            rgba(231, 129, 107, 0.5),
            rgba(231, 129, 107, 0.5)
          ),
          url("/assets/home/tablet/image-web-design.jpg");
      }
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .web-design-item {
      grid-area: 1 / 1 / 3 / 2;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("/assets/home/desktop/image-web-design-large.jpg");

      &:hover,
      &:active,
      &:focus {
        background-image: linear-gradient(
            rgba(231, 129, 107, 0.5),
            rgba(231, 129, 107, 0.5)
          ),
          url("/assets/home/desktop/image-web-design-large.jpg");
      }
    }
  }
`;

export const GridItem: FC<{ text: string; className: string; url: string }> = ({
  text,
  className,
  url,
}) => {
  return (
    <Link href={url}>
      <Item className={className}>
        <Heading color="light" variant="secondary" emphasis={true}>
          {text}
        </Heading>
        <ViewPrompt>
          <p>View Projects</p>
          <img src="/assets/shared/desktop/icon-right-arrow.svg" />
        </ViewPrompt>
      </Item>
    </Link>
  );
};

const Item = styled.article`
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  min-height: 15.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ViewPrompt = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary.light};
  font-size: 0.9375rem;
  letter-spacing: 5px;
  text-transform: uppercase;

  p {
    margin-right: 1rem;
  }
`;
