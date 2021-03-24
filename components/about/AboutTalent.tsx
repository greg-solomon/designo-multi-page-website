import React, { FC } from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { BodyText } from "../ui/BodyText";
import {
  SecondaryContainer,
  SecondaryContainerContent,
} from "./containers/SecondaryContainer";
export const AboutTalent: FC = ({}) => {
  return (
    <SecondaryContainer reverse={true} position="50% 65%">
      <SecondaryContainerContent>
        <div>
          <img
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            className="backdrop-img"
          />
          <Heading>World Class Talent</Heading>
          <BodyText>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </BodyText>
          <BodyText>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </BodyText>
        </div>
      </SecondaryContainerContent>
      <img
        srcSet="/assets/about/tablet/image-world-class-talent.jpg 768w, /assets/about/desktop/image-world-class-talent.jpg 1440w"
        className="display-img"
      />
    </SecondaryContainer>
  );
};
