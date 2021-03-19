import React from "react";
import styled, { CSSObject, CSSProp } from "styled-components";

interface BodyTextProps {
  css?: CSSProp | CSSObject;
}

export const BodyText: React.FC<BodyTextProps> = ({ children, ...props }) => {
  return <Paragraph {...props}>{children}</Paragraph>;
};

const Paragraph = styled.p`
  color: ${(props) => props.theme.secondary.dark};
  font-size: 1rem;
  line-height: 1.625rem;
`;
