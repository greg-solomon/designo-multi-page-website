import React from "react";
import { BodyText } from "../ui/BodyText";
import { Heading } from "../ui/Heading";
import {
  SecondaryContainer,
  SecondaryContainerContent,
} from "./containers/SecondaryContainer";

interface AboutDealProps {}

export const AboutDeal: React.FC<AboutDealProps> = ({}) => {
  return (
    <SecondaryContainer reverse={false} position="50% 45%">
      <SecondaryContainerContent>
        <div>
          <img
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            className="backdrop-img"
          />
          <Heading>The real deal</Heading>
          <BodyText>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </BodyText>
          <BodyText>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </BodyText>
        </div>
      </SecondaryContainerContent>
      <img
        srcSet="/assets/about/tablet/image-real-deal.jpg 768w, /assets/about/desktop/image-real-deal.jpg 1440w"
        className="display-img"
      />
    </SecondaryContainer>
  );
};
