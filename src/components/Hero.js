import React from "react";
import InfoSection from "./InfoSection";
import { home_Object_Dance } from "./pages/Culturals/CulturalsData";
import { learnMoreObject_dance } from "./pages/Culturals/CulturalsLearnMoreData";
import WebpageSection from "./WebpageSection";

function Hero() {
  return (
    <>
      <InfoSection {...learnMoreObject_dance} />
    </>
  );
}

export default Hero;
