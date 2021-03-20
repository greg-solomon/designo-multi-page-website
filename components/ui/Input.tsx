import React from "react";
import styled from "styled-components";

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends DefaultInputProps {}

export const Input: React.FC<InputProps> = (props) => {
  return <Styled type="text" {...props} />;
};

const Styled = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};

  &:hover,
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.primary.light};
  }
`;
