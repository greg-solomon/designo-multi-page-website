import React, { FC, FormEvent } from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import { BodyText } from "../ui/BodyText";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";

export const ContactForm: FC = ({}) => {
  const [name, nameHandlers] = useInput();
  const [email, emailHandlers] = useInput();
  const [phone, phoneHandlers] = useInput();
  const [message, messageHandlers] = useInput();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <img
        src="/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
        className="bg-backdrop-mobile"
      />
      <img
        src="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
        className="bg-backdrop-desktop"
      />
      <div className="info">
        <Heading color="light">Contact Us</Heading>
        <BodyText color="light">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </BodyText>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={nameHandlers.onChange}
          required
        />
        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={emailHandlers.onChange}
          required
        />
        <Input
          placeholder="Phone"
          type="tel"
          value={phone}
          onChange={phoneHandlers.onChange}
          required
        />
        <Input
          textarea
          placeholder="Your Message"
          value={message}
          onChange={messageHandlers.onChange}
          required
        />
        <Button variant="light" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1110px;
  padding: 4rem 1.5rem;
  color: ${({ theme }) => theme.primary.light};
  background-color: ${({ theme }) => theme.primary.main};
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 0;

  .bg-backdrop-mobile,
  .bg-backdrop-desktop {
    position: absolute;

    user-select: none;
    z-index: -1;
  }

  .bg-backdrop-mobile {
    top: -5%;
    left: -20%;
  }

  .bg-backdrop-desktop {
    display: none;
  }

  form {
    width: 100%;
    z-index: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  form button {
    margin-top: 1.75rem;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    min-width: 689px;
    margin: 0 auto;
    margin-top: 1.5rem;
    border-radius: 15px;
    text-align: left;
    align-items: flex-start;
    padding: 4.5rem 3.5rem;

    form button {
      align-self: flex-end;
      margin-top: 0.75rem;
    }

    .bg-backdrop-mobile {
      display: none;
    }

    .bg-backdrop-desktop {
      display: block;
      top: -20%;
      left: -20%;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 480px;
    flex-direction: row;
    align-items: center;
    padding: 4.5rem 5.5rem;
    justify-content: space-between;
    .info {
      width: 60%;
      max-width: 450px;
    }

    form {
      width: 40%;
    }

    .bg-backdrop-desktop {
      top: -30%;
      left: 0%;
    }
  }
`;
