import React, { FC } from "react";
import styled from "styled-components";
import { ContactForm } from "../components/contact/ContactForm";
import { Locations } from "../components/shared/Locations";

const ContactPage: FC = ({}) => {
  return (
    <Main>
      <ContactForm />
      <Locations />
    </Main>
  );
};

const Main = styled.main`
  position: relative;
`;

export default ContactPage;
