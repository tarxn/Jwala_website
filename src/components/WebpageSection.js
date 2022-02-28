import React, { useState } from "react";
import { Button } from "./Button";
import { Link, Route } from "react-router-dom";
import "./WebpageSection.css";

function WebpageSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgToggle,
  redirect,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        className={
          lightBg ? "home__Webpage-section" : "home__Webpage-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row home__Webpage-row"
            style={{
              display: "flex",
              flexDirection: imgToggle === "left" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__Webpage-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__Webpage-subtitle"
                      : "home__Webpage-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to={redirect} onClick={handleClick}>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__Webpage-img-wrapper">
                <img src={img} alt={alt} className="home__Webpage-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebpageSection;
