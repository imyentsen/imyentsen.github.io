import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Banner from "../components/portfolio/Banner";
import Content from "../components/portfolio/Content";

export default function PortfolioTemplate({ data }) {
  const { frontmatter, html, rawMarkdownBody } = data.markdownRemark;

  return (
    <Layout className="portfolio-content">
      <div className="portfolio-hero">
        <Banner frontmatter={frontmatter} />
        <Content markdownHtml={html} markdownRaw={rawMarkdownBody} title={frontmatter.title} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PortfolioById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        org
        year
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 720, placeholder: BLURRED)
          }
          publicURL
        }
        desc
      }
      html
      rawMarkdownBody
    }
  }
`;
