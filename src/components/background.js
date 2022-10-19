import React from "react";
import data from "../content/content.json";
import triangle from "../images/home-triangle-bottom.svg";
import { Link } from "gatsby";
import fflogo from "../images/fflogo.svg";

const Home = () => (
  <div className="home" id={data.home.id}>
    <div className="wrapper">
      <div className="nav">
        <div className="nav-wrapper">
          <Link to="/" id="fflogo">
            <img src={fflogo} alt="SmokeFinder logo" />
          </Link>
        </div>
      </div>
    </div>
    <div className="home_background">
      <div style={{ backgroundImage: `url(${triangle})` }} id="triangle"></div>
    </div>
  </div>
);

export default Home;
