import Head from "next/head";
import React, { FC } from "react";
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
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main>
        <GenericLanding
          title="Graphic Design"
          body="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
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
      </main>
    </>
  );
};

export default WebDesignPage;
