import * as React from "react";
import Background from "../components/background";
import Seo from "../components/seo";
import data from "../content/content.json";

const Privacy = () => (
  <>
    <Seo />
    <Background />
    <div className="rawTextSite">
      <h1>{data.funding.title}</h1>
      <p>{data.funding.description}</p>
      <h2>{data.funding.financing}</h2>
    </div>
  </>
);

export default Privacy;
