import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

type DefaultInputProps = React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
>;

interface InputProps extends DefaultInputProps {
  textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({ textarea = false, ...props }) => {
  const [isInvalid, setInvalid] = useState(false);

  const onInvalid = (event) => {
    event.preventDefault();
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Can't be empty");
      setInvalid(true);
    } else if (!event.target.validity.valid) {
      event.target.setCustomValidity("Invalid input");
      setInvalid(true);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInvalid(false);
    props.onChange(e);
  };
  return (
    <Container filled={!!props.value}>
      {!textarea && (
        <input
          type="text"
          {...props}
          className="inp"
          onInvalid={onInvalid}
          onChange={onChange}
        />
      )}
      {textarea && (
        <textarea
          {...props}
          onInvalid={onInvalid}
          onChange={onChange}
          className="inp"
        />
      )}
      {isInvalid && (
        <span className="inp-validation">
          <em>Can't be empty</em>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <g fill="none" fillRule="evenodd">
              <circle cx="10" cy="10" r="10" fill="#FFF" />
              <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
            </g>
          </svg>
        </span>
      )}
    </Container>
  );
};

const Container = styled.div<{ filled: boolean }>`
  width: 100%;
  min-height: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  .inp {
    height: 100%;
    padding-left: 1rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.primary.light};
    width: 100%;
    border-bottom: ${({ filled }) =>
      filled ? "2px solid white" : "1px solid white"};
    padding-bottom: 1rem;
    font-size: 0.9375rem;
  }

  .inp::placeholder {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }

  .inp:focus {
    outline: none;
  }

  textarea {
    min-height: 120px;
  }

  .inp-validation {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    em {
      margin-right: 0.5rem;
      font-size: 0.75rem;
    }
  }
`;
