import * as React from "react";
import data from "../content/content.json";
import triangle from "../images/home-triangle-bottom.svg";
import treesBig from "../images/trees-big.svg";
import mouse from "../images/mouse.svg";
import mouseScroll from "../images/mouse-scroll.svg";
import mouseArrow from "../images/mouse-arrow.svg";
import EU from "../images/eu.svg";
import Neuralbit from "../images/neuralbit.svg";
import Button from "./button";
import AuthorCard from "./authorCard";
import Nav from "./nav";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Link } from "gatsby";

const Home = () => {
  return (
    <div className="home" id={data.home.id}>
      <div className="wrapper">
        <img src={treesBig} alt="trees icon" id="trees-big" />
        <Nav />
        <div className="home_text">
          <h1 className="title">{data.home.title}</h1>
          <h2 className="description">{data.home.description}</h2>
          <Button
            text={data.home.button}
            click={() => {
              document.getElementById("email")?.focus();
              scrollTo(`#${data.footer.id}`);
            }}
          />
        </div>
        <div className="createdBy">
          <Link to="funding">
            <AuthorCard image={EU} alt={"EU"} text={data.home.supportedBy} />
          </Link>
          <AuthorCard
            image={Neuralbit}
            alt={"Neuralbit"}
            text={data.home.createdBy}
          />
        </div>
      </div>
      <div className="home_background">
        <div
          style={{ backgroundImage: `url(${triangle})` }}
          id="triangle"
        ></div>
        <button
          id="mouse"
          onClick={() => {
            scrollTo(`#${data.effects.id}`);
          }}
        >
          <img src={mouse} alt="mouse icon" id="mouse-icon" />
          <img src={mouseScroll} alt="mouse icon" id="mouse-scroll" />
          <img src={mouseArrow} alt="mouse icon" id="mouse-arrow1" />
          <img src={mouseArrow} alt="mouse icon" id="mouse-arrow2" />
          <img src={mouseArrow} alt="mouse icon" id="mouse-arrow3" />
        </button>
      </div>
    </div>
  );
};
export default Home;
