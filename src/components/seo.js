/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import data from "../content/content.json";
import image from "../images/fflogo.svg";

function Seo() {
  return (
    <Helmet
      htmlAttributes={{
        lang: data.meta.lang,
      }}
      title={data.meta.title}
      titleTemplate={data.meta.title ? `%s | ${data.meta.author}` : null}
      meta={[
        {
          name: `description`,
          content: data.meta.description,
        },
        {
          property: `og:title`,
          content: data.meta.title,
        },
        {
          property: `og:description`,
          content: data.meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.meta.author || ``,
        },
        {
          name: `twitter:title`,
          content: data.meta.title,
        },
        {
          name: `twitter:description`,
          content: data.meta.description,
        },
      ].concat(data.meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Seo;
