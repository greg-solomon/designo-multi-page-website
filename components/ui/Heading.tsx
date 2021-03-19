import React, { ReactNode } from "react";
import styled, { CSSObject, CSSProp } from "styled-components";
interface HeadingProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  css?: CSSProp | CSSObject;
}

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
  ...props
}) => {
  switch (variant) {
    case "tertiary":
      return <TertiaryHeading {...props}>{children}</TertiaryHeading>;
    case "secondary":
      return <SecondaryHeading {...props}>{children}</SecondaryHeading>;
    case "primary":
    default:
      return <PrimaryHeading {...props}>{children}</PrimaryHeading>;
  }
};

const PrimaryHeading = styled.h1`
  color: ${(props) => props.theme.primary.dark};
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 500;
`;
const SecondaryHeading = styled.h2`
  color: ${(props) => props.theme.primary.dark};
  font-size: 2.5rem;
  line-height: 3rem;
  line-spacing: 2px;
  font-weight: 500;
`;
const TertiaryHeading = styled.h3`
  color: ${(props) => props.theme.secondary.dark};
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: 5px;
`;
