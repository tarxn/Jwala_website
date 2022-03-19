import React from "react";
import WebpageSection from "../../WebpageSection";
import {
  home_Object_aqua,
  home_Object_athe,
  home_Object_baddy,
  home_Object_basky,
  home_Object_cric,
  home_Object_footy,
  home_Object_hockey,
  home_Object_tennis,
  home_Object_TT,
  home_Object_volley,
  home_Object_weight,
} from "./SportsData";
import SportsSlider from "./SportsSlider";
import { SportsSliderData } from "./SportsSliderData";

function Sports() {
  return (
    <>
      <SportsSlider slides={SportsSliderData} />
      <WebpageSection {...home_Object_aqua} />
      <WebpageSection {...home_Object_athe} />
      <WebpageSection {...home_Object_basky} />
      <WebpageSection {...home_Object_cric} />
      <WebpageSection {...home_Object_baddy} />
      <WebpageSection {...home_Object_footy} />
      <WebpageSection {...home_Object_hockey} />
      <WebpageSection {...home_Object_TT} />
      <WebpageSection {...home_Object_tennis} />
      <WebpageSection {...home_Object_volley} />
      <WebpageSection {...home_Object_weight} />
    </>
  );
}

export default Sports;
