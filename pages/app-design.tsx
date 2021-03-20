import Head from "next/head";
import React, { FC } from "react";
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
      <main>
        <GenericLanding
          title="App Design"
          body="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        />
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
      </main>
    </>
  );
};

export default AppDesignPage;
