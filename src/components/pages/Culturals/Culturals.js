import React from "react";
import { Button } from "./../../Button";
import { RiArrowDownFill } from "react-icons/ri";
import WebpageSection from "../../WebpageSection";
import {
  home_Object_Dance,
  home_Object_Deb,
  home_Object_Drama,
  home_Object_FACC,
  home_Object_HS,
  home_Object_Lit,
  home_Object_Music,
  home_Object_PFC,
  home_Object_Quiz,
  home_Object_Spic_Macay,
} from "./CulturalsData";
import "./Culturals.css";

function Culturals() {
  const exploreRedirect = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="Culturalspage-container">
        <img src="/images/img-9.jpg" alt="" />
        <h1>Vulcan - The Cultural Society</h1>
        <div className="Culturals-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            hic dignissimos officia ipsum ratione quo sit quod pariatur ipsam
            fuga, perspiciatis nesciunt, praesentium aut repellat eligendi nam
            laboriosam laudantium deserunt?
          </p>
        </div>
        <div className="Culturalpage-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonColor="blue"
            onClick={exploreRedirect}
          >
            EXPLORE
            <RiArrowDownFill style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <WebpageSection {...home_Object_Dance} />
      <WebpageSection {...home_Object_Drama} />
      <WebpageSection {...home_Object_FACC} />
      <WebpageSection {...home_Object_Deb} />
      <WebpageSection {...home_Object_Music} />
      <WebpageSection {...home_Object_PFC} />
      <WebpageSection {...home_Object_Lit} />
      <WebpageSection {...home_Object_Quiz} />
      <WebpageSection {...home_Object_HS} />
      <WebpageSection {...home_Object_Spic_Macay} />
    </>
  );
}

export default Culturals;
