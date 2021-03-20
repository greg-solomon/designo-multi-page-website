import React from "react";
import styled from "styled-components";

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends DefaultButtonProps {
  variant?: "light" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "light",
  ...props
}) => {
  return (
    <Styled {...props} variant={variant}>
      {children}
    </Styled>
  );
};

const Styled = styled.button<{ variant: "light" | "dark" }>`
  background-color: ${({ variant, theme }) =>
    variant === "light" ? theme.primary.light : theme.primary.main};
  color: ${({ variant, theme }) =>
    variant === "light" ? theme.primary.dark : theme.primary.light};
  width: 9.5rem;
  min-height: 3.5rem;
  font-weight: 500;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.secondary.main};
    color: ${({ theme }) => theme.primary.light};
  }
`;
