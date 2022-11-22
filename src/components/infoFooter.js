import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function InfoFooter() {
  return (
    <div className="infoFooter">
      <StaticImage
        src="../images/infoFooter.png"
        alt="European Union"
        placeholder="tracedSVG"
      />
    </div>
  );
}

export default InfoFooter;