import React from "react";
import Link from "gatsby-link";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";

const Test = ({ data: { test } }) => (
  <article className="sheet">
    <HelmetDatoCms seo={test.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{test.title}</h1>
      <p className="sheet__lead">{test.subtitle}</p>
      <div className="sheet__gallery">
        <Img sizes={test.photo.sizes} />
      </div>
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: test.bioNode.childMarkdownRemark.html
        }}
      />
    </div>
  </article>
);

export default Test;

export const query = graphql`
  query TestQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
