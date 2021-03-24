import React, { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { ContactForm } from "../components/contact/ContactForm";
import { Locations } from "../components/shared/Locations";

const ContactPage: FC = () => {
  return (
    <Main>
      <Head>
        <title>Contact Us | Designo Agency Website Challenge</title>
      </Head>
      <ContactForm />
      <Locations />
    </Main>
  );
};

const Main = styled.main`
  position: relative;
`;

export default ContactPage;
