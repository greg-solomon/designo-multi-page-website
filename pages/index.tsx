import React from "react";
import Head from "next/head";
import { CTA } from "../components/shared/CTA";
import { Landing, Services, Values } from "../components/home/";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Main>
        <Landing />
        <svg
          width="1006"
          height="594"
          xmlns="http://www.w3.org/2000/svg"
          className="leaf"
        >
          <path
            d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
            fill="#F1F3F5"
            fillRule="evenodd"
            opacity=".502"
          />
        </svg>
        <Services />
        <Values />
        <svg
          width="1006"
          height="594"
          xmlns="http://www.w3.org/2000/svg"
          className="reverse-leaf"
        >
          <path
            d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
            fill="#F1F3F5"
            fillRule="evenodd"
            opacity=".502"
          />
        </svg>
        <CTA />
      </Main>
    </>
  );
}

const Main = styled.main`
  position: relative;
  .leaf,
  .reverse-leaf {
    display: none;
    position: absolute;
    z-index: -40;
  }

  .leaf {
    top: 400px;
    left: 0;
  }

  .reverse-leaf {
    transform: scaleX(-1) scaleY(-1);
    right: 0;
    top: 70%;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    .leaf {
      display: block;
    }

    .reverse-leaf {
      display: block;
    }
  }
`;
