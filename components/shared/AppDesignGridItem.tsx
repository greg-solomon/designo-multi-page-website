import Link from "next/link";
import React, { FC } from "react";
import styled, { CSSObject, CSSProp } from "styled-components";
import { Heading } from "../ui/Heading";

export const AppDesignGridItem: FC<{ css?: CSSProp | CSSObject }> = ({
  css,
}) => {
  return (
    <Link href="/app-design">
      <Item>
        <Heading color="light" variant="secondary" emphasis={true}>
          App Design
        </Heading>
        <ViewPrompt>
          <p>View Projects</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="Right Arrow Icon"
          />
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

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/assets/home/mobile/image-app-design.jpg");
  &:hover,
  &:active,
  &:focus {
    background-image: linear-gradient(
        rgba(231, 129, 107, 0.5),
        rgba(231, 129, 107, 0.5)
      ),
      url("/assets/home/mobile/image-app-design.jpg");
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/assets/home/desktop/image-app-design.jpg");

    &:hover,
    &:active,
    &:focus {
      background-image: linear-gradient(
          rgba(231, 129, 107, 0.5),
          rgba(231, 129, 107, 0.5)
        ),
        url("/assets/home/desktop/image-app-design.jpg");
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/assets/home/desktop/image-app-design.jpg");

    &:hover,
    &:active,
    &:focus {
      background-image: linear-gradient(
          rgba(231, 129, 107, 0.5),
          rgba(231, 129, 107, 0.5)
        ),
        url("/assets/home/desktop/image-app-design.jpg");
    }
  }
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
