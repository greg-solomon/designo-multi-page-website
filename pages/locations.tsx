import Head from "next/head";
import React, { FC } from "react";
import { Location } from "../components/locations/Location";
import { CTA } from "../components/shared/CTA";
const LocationsPage: FC = ({}) => {
  return (
    <main>
      <Head>
        <title>Locations | Designo</title>
      </Head>
      <Location
        officeAddress="3886 Wellington Street"
        officeCity="Toronto, Ontario M9C 3J5"
        officeTitle="Designo Central Office"
        phoneNumber="+1 253-863-8967"
        email="contact@designo.co"
        country="Canada"
        coords={[43.64818, -79.37575]}
        id="canada"
      />
      <Location
        officeAddress="19 Balonne Street"
        officeCity="New South Wales 2443"
        officeTitle="Designo AU Office"
        phoneNumber="(02) 6720 9092"
        email="contact@designo.au"
        country="Australia"
        reverse={true}
        coords={[-30.32953, 149.78819]}
        id="australia"
      />
      <Location
        officeAddress="13 Colorado Way"
        officeCity="Rhyd-y-fro SA8 9GA"
        officeTitle="Designo UK Office"
        phoneNumber="078 3115 1400"
        email="contact@designo.uk"
        country="United Kingdom"
        coords={[40.51428, -107.5474]}
        id="uk"
      />

      <CTA />
    </main>
  );
};

export default LocationsPage;
