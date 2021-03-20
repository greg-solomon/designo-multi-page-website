import React, { ReactNode } from "react";
import styled, { CSSObject, CSSProp } from "styled-components";
interface HeadingProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  css?: CSSProp | CSSObject;
  color?: "light" | "dark";
  emphasis?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
  color = "dark",
  emphasis = false,
  ...props
}) => {
  switch (variant) {
    case "tertiary":
      return (
        <TertiaryHeading color={color} {...props} emphasis={emphasis}>
          {children}
        </TertiaryHeading>
      );
    case "secondary":
      return (
        <SecondaryHeading color={color} {...props} emphasis={emphasis}>
          {children}
        </SecondaryHeading>
      );
    case "primary":
    default:
      return (
        <PrimaryHeading color={color} {...props} emphasis={emphasis}>
          {children}
        </PrimaryHeading>
      );
  }
};

interface StyledHeaderProp {
  color: "light" | "dark";
  emphasis: boolean;
}

const headingColor = (color, theme) =>
  color === "dark" ? theme.primary.dark : theme.primary.light;

const PrimaryHeading = styled.h1<StyledHeaderProp>`
  color: ${({ color, theme }) => headingColor(color, theme)};
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  text-transform: ${(props) => (props.emphasis ? "uppercase" : "none")};
`;

const SecondaryHeading = styled.h2<StyledHeaderProp>`
  color: ${({ color, theme }) => headingColor(color, theme)};
  line-height: 3rem;
  line-spacing: 2px;
  font-weight: 500;
  text-transform: ${(props) => (props.emphasis ? "uppercase" : "none")};
  font-size: 1.75rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 2.5rem;
  }
`;
const TertiaryHeading = styled.h3<StyledHeaderProp>`
  color: ${({ color, theme }) => headingColor(color, theme)};
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: 5px;
  font-weight: 500;
  margin-bottom: 2rem;
  text-transform: ${(props) => (props.emphasis ? "uppercase" : "none")};
`;
