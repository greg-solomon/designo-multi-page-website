import React from "react";
import styled, { CSSObject, CSSProp } from "styled-components";

interface BodyTextProps {
  css?: CSSProp | CSSObject;
  color?: "light" | "dark";
}

export const BodyText: React.FC<BodyTextProps> = ({
  children,
  color = "dark",
  ...props
}) => {
  return (
    <Paragraph color={color} {...props}>
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{ color: "light" | "dark" }>`
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.secondary.dark
      : props.theme.primary.light};
  font-size: 1rem;
  line-height: 1.625rem;
  margin-bottom: 1.75rem;
`;
