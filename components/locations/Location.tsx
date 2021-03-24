import React from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

interface LocationProps {
  officeTitle: string;
  officeAddress: string;
  officeCity: string;
  phoneNumber: string;
  email: string;
  country: string;
  reverse?: boolean;
  coords: [number, number];
  id: string;
}

export const Location: React.FC<LocationProps> = ({
  officeAddress,
  officeCity,
  officeTitle,
  phoneNumber,
  email,
  country,
  reverse = false,
  coords,
  id,
}) => {
  return (
    <Container reverse={reverse} id={id}>
      <div className="map-container">
        <MapComponent coords={coords} title={officeTitle} />
      </div>
      <LocationInfo>
        <Heading>{country}</Heading>
        <div className="location-lists">
          <ul>
            <li>
              <strong>{officeTitle}</strong>
            </li>
            <li>{officeAddress}</li>
            <li>{officeCity}</li>
          </ul>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>P : {phoneNumber}</li>
            <li>M: {email}</li>
          </ul>
        </div>
        <img
          src="/assets/shared/desktop/bg-pattern-three-circles.svg"
          className="bg"
        />
      </LocationInfo>
    </Container>
  );
};

const Container = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-flow: column;
  max-width: 1110px;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.tablet} {
    .map-container {
      border-radius: 15px;
      width: 87.5%;
      min-width: 689px;
      margin: 0 auto;
      overflow: hidden;
      margin-bottom: ;
      margin-bottom: 2rem;
    }
    margin-bottom: 7.5rem;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    flex-flow: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    .map-container {
      width: 20rem;
      max-width: 20rem;
      min-width: 20rem;
    }
    margin-bottom: 1.5rem;
  }
`;

const LocationInfo = styled.div`
  background-color: ${({ theme }) => theme.primary.cool};
  height: 400px;
  text-align: center;
  padding: 5.125rem 0;
  position: relative;
  overflow: hidden;
  h1 {
    color: ${({ theme }) => theme.primary.main};
  }

  ul {
    margin-bottom: 1.5rem;
    list-style: none;
  }

  ul li {
    margin-bottom: 0.5rem;
  }

  .bg {
    position: absolute;
    top: 0%;
    left: 0%;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    border-radius: 15px;
    width: 87.5%;
    min-width: 689px;
    margin: 0 auto;
    height: 326px;
    padding: 0 4rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .location-lists {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 80%;
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 730px;
  }
`;
