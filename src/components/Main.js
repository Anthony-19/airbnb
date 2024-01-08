import React from "react";
import HeroLogo from "../images/hero-image.png";
export default function Main() {
  return (
    <div className="main">
      <img src={HeroLogo} className="hero--logo" />
        <h1 className="hero--header">Online Experiences</h1>
        <h3 className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
    </div>
  );
}
