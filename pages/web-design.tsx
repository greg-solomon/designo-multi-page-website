import Head from "next/head";
import React, { FC } from "react";
import styled from "styled-components";
import { AppDesignGridItem } from "../components/shared/AppDesignGridItem";
import { CaseStudy } from "../components/shared/CaseStudy";
import { CTA } from "../components/shared/CTA";
import { GenericLanding } from "../components/shared/GenericLanding";
import { GraphicDesignGridItem } from "../components/shared/GraphicDesignGridItem";

const WebDesignPage: FC = ({}) => {
  return (
    <>
      <Head>
        <title>Web Design | Designo Agency Website Challenge</title>
      </Head>
      <Main>
        <GenericLanding
          title="Web Design"
          body="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        >
          <LandingDesktopSVG src="/assets/web-design/desktop/bg-pattern-intro-web.svg" />
        </GenericLanding>
        <svg
          width="1006"
          height="594"
          xmlns="http://www.w3.org/2000/svg"
          className="leaf "
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
            title="Express"
            body="A multi-carrier shipping website for ecommerce businesses"
            image="/assets/web-design/desktop/image-express.jpg"
          />
          <CaseStudy
            title="Transfer"
            body="Site for low-cost money transfers and sending money within seconds"
            image="/assets/web-design/desktop/image-transfer.jpg"
          />
          <CaseStudy
            title="Photon"
            body="A state-of-the-art music player with high-resolution audio and DSP effects"
            image="/assets/web-design/desktop/image-photon.jpg"
          />
          <CaseStudy
            title="Builder"
            body="Connects users with local contractors based on their location"
            image="/assets/web-design/desktop/image-builder.jpg"
          />
          <CaseStudy
            title="Blogr"
            body="Blogr is a platform for creating an online blog or publication"
            image="/assets/web-design/desktop/image-blogr.jpg"
          />
          <CaseStudy
            title="Camp"
            body="Get expert training in coding, data, design, and digital marketing"
            image="/assets/web-design/desktop/image-camp.jpg"
          />
        </CaseStudyGrid>
        <ServiceGrid>
          <AppDesignGridItem />
          <GraphicDesignGridItem />
        </ServiceGrid>
        <CTA />
      </Main>
    </>
  );
};

const Main = styled.main`
  .leaf {
    display: none;
    position: absolute;
    z-index: -40;
    top: 250px;
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
export const CaseStudyGrid = styled.section`
  display: grid;
  max-width: 1110px;
  grid-template-columns: 1fr;
  width: 87.5%;
  margin: 0 auto;
  justify-items: center;
  grid-gap: 2.5rem;
  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceGrid = styled.section`
  display: grid;
  max-width: 1110px;
  grid-template-columns: 1fr;
  grid-template-rows: 310px;
  width: 87.5%;
  margin: 0 auto;
  margin-top: 6rem;
  justify-items: center;
  grid-gap: 2.5rem;
  margin-bottom: 5rem;
  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.875rem;
  }
`;

const LandingDesktopSVG = styled.img`
  display: none;
  position: absolute;
  right: 0;
  z-index: -1;
  ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
`;
export default WebDesignPage;
