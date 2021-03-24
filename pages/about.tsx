import React, { FC } from "react";
import styled from "styled-components";
import { AboutDeal } from "../components/about/AboutDeal";
import { AboutLanding } from "../components/about/AboutLanding";
import { AboutTalent } from "../components/about/AboutTalent";
import { CTA } from "../components/shared/CTA";
import { Locations } from "../components/shared/Locations";
const AboutPage: FC = ({}) => {
  return (
    <Main>
      <AboutLanding />
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
      <AboutTalent />
      <Locations />
      <AboutDeal />
      <CTA />
    </Main>
  );
};

const Main = styled.main`
  position: relative;
  .leaf {
    display: none;
    position: absolute;
    z-index: -40;
    top: 300px;
    left: 0;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    .leaf {
      display: block;
    }
  }
`;

export default AboutPage;
