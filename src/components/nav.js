import React, { useState } from "react";
import fflogo from "../images/fflogo.svg";
import menu from "../images/menu.svg";
import xMark from "../images/x-mark.svg";
import scrollTo from "gatsby-plugin-smoothscroll";
import data from "../content/content.json";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <button
          id="fflogo"
          onClick={() => {
            scrollTo(`#${data.home.id}`);
          }}
        >
          <img src={fflogo} alt="SmokeFinder logo" />
        </button>
        <div className="links">
          <button onClick={handleClick} id="menu">
            <img src={isOpen ? xMark : menu} alt="menu icon" />
          </button>
          <div className="menu-expanded">
            {data.nav.map((section) => (
              <button
                key={section.text}
                className="menu-section"
                onClick={() => {
                  scrollTo(`#${section.id}`);
                }}
              >
                {section.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="nav-menu">
          {data.menu.map((section) => (
            <button
              key={section.text}
              className="menu-section"
              onClick={() => {
                scrollTo(`#${section.id}`);
                handleClick();
              }}
            >
              {section.text.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
