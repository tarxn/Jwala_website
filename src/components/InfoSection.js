import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { RiArrowDownFill } from "react-icons/ri";
import "./InfoSection.css";
import AboutUs from "./aboutusComponent";

function InfoSection() {
  return (
    <>
      <div className="infoPage-container">
        <img src="/images/img-1.jpg" alt="" className="info-img" />
        <h1>Dance Club</h1>
        <div className="info-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            recusandae iure perferendis ea aspernatur commodi rerum et ad
            corrupti doloribus minima tempora, quibusdam aliquam fugiat, velit
            cumque quam ratione nobis!
          </p>
        </div>
        <div className="infoPage-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonColor="blue"
          >
            EXPLORE
            <RiArrowDownFill style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <div className="container-fluid">
        <AboutUs />
      </div>
    </>
  );
}
export default InfoSection;
