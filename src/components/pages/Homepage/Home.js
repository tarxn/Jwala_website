import React, { useEffect } from "react";
import WebpageSection from "../../WebpageSection";
import {
  home_Object_1,
  home_Object_2,
  home_Object_3,
  home_Object_4,
} from "./Data";
import { Button } from "./../../Button";
import { FaPlayCircle } from "react-icons/fa";
import "./Home.css";

function Home() {
  const getStartedRedirect = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  const watchOurLegacyRedirect = (url) => {
    const newWindow = window.open(url);
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <>
      <div className="Homepage-container">
        <img src="/images/Cover-image.jpg" alt="alt-desc" />
        <h1>FIRE AND VICTORY</h1>
        <div className="Homepage-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe dolore quibusdam nobis voluptates quis sequi, eum in ab,
            fugiat culpa! A aut at praesentium, corrupti expedita animi fuga?
            Quidem!
          </p>
        </div>
        <div className="Homepage-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={getStartedRedirect}
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonColor="primary"
            buttonSize="btn--large"
            onClick={() =>
              watchOurLegacyRedirect(
                "https://www.youtube.com/watch?v=lMVGza27xns"
              )
            }
          >
            WATCH OUR LEGACY <FaPlayCircle style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <WebpageSection {...home_Object_1} />
      <WebpageSection {...home_Object_3} />
      <WebpageSection {...home_Object_2} />
      <WebpageSection {...home_Object_4} />
    </>
  );
}

export default Home;
