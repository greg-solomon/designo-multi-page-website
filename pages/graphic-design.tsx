import Head from "next/head";
import React, { FC } from "react";
import styled from "styled-components";
import { AppDesignGridItem } from "../components/shared/AppDesignGridItem";
import { CaseStudy } from "../components/shared/CaseStudy";
import { CTA } from "../components/shared/CTA";
import { GenericLanding } from "../components/shared/GenericLanding";
import { WebDesignGridItem } from "../components/shared/WebDesignGridItem";
import { CaseStudyGrid, ServiceGrid } from "./web-design";

const WebDesignPage: FC = ({}) => {
  return (
    <>
      <Head>
        <title>Graphic Design | Designo Agency Website Challenge</title>
      </Head>
      <Main>
        <GenericLanding
          title="Graphic Design"
          body="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        >
          <LandingDesktopSVG src="/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg" />
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
            title="Tim Brown"
            body="A book cover designed for Tim Brown’s new release, ‘Change’"
            image="/assets/graphic-design/desktop/image-change.jpg"
          />
          <CaseStudy
            title="Boxed water"
            body="A simple packaging concept made for Boxed Water"
            image="/assets/graphic-design/desktop/image-boxed-water.jpg"
          />
          <CaseStudy
            title="Science!"
            body="A poster made in collaboration with the Federal Art Project"
            image="/assets/graphic-design/desktop/image-science.jpg"
          />
        </CaseStudyGrid>
        <ServiceGrid>
          <AppDesignGridItem />
          <WebDesignGridItem />
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
  left: -5%;
  z-index: -1;
  ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
`;

export default WebDesignPage;
