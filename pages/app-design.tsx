import Head from "next/head";
import React, { FC } from "react";
import styled from "styled-components";
import { CaseStudy } from "../components/shared/CaseStudy";
import { CTA } from "../components/shared/CTA";
import { GenericLanding } from "../components/shared/GenericLanding";
import { GraphicDesignGridItem } from "../components/shared/GraphicDesignGridItem";
import { WebDesignGridItem } from "../components/shared/WebDesignGridItem";
import { CaseStudyGrid, ServiceGrid } from "./web-design";

const AppDesignPage: FC = ({}) => {
  return (
    <>
      <Head>
        <title>App Design | Designo Agency Website Challenge</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Main>
        <GenericLanding
          title="App Design"
          body="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        >
          <LandingDesktopSVG src="/assets/app-design/desktop/bg-pattern-intro-app.svg" />
        </GenericLanding>
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
        <CaseStudyGrid>
          <CaseStudy
            title="Airfilter"
            body="Solving the problem of poor indoor air quality by filtering the air"
            image="/assets/app-design/desktop/image-airfilter.jpg"
          />
          <CaseStudy
            title="Eyecam"
            body="Site for low-cost money transfers and sending money within seconds"
            image="/assets/app-design/desktop/image-eyecam.jpg"
          />
          <CaseStudy
            title="Faceit"
            body="Get to meet your favorite internet superstar with the faceit app"
            image="/assets/app-design/desktop/image-faceit.jpg"
          />
          <CaseStudy
            title="Todo"
            body="A todo app that features cloud sync with light and dark mode"
            image="/assets/app-design/desktop/image-todo.jpg"
          />
          <CaseStudy
            title="Loopstudios"
            body="A VR experience app made for Loopstudios"
            image="/assets/app-design/desktop/image-loopstudios.jpg"
          />
        </CaseStudyGrid>
        <ServiceGrid>
          <WebDesignGridItem />
          <GraphicDesignGridItem />
        </ServiceGrid>
        <CTA />
      </Main>
    </>
  );
};

const Main = styled.main`
  position: relative;
  .leaf {
    display: none;
    position: absolute;
    z-index: -40;
    top: 150px;
    left: 0;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    padding-top: 1.5rem;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    .leaf {
      display: block;
    }
  }
`;

const LandingDesktopSVG = styled.img`
  display: none;
  position: absolute;
  left: -10%;
  top: -55%;
  z-index: -1;
  ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
`;

export default AppDesignPage;
