import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Banner from "../components/portfolio/Banner";
import Content from "../components/portfolio/Content";

export default function PortfolioTemplate({ data }) {
  const { frontmatter, html, rawMarkdownBody } = data.markdownRemark;

  // Fallbacks
  const defaultTitle = "Yen-tsen Ansin Liu's Portfolio";
  const defaultDescription = "Senior UX Designer specializing in data-heavy design, digital twins, and design systems.";
  const defaultOgImage = "/og-image.jpg";
  const defaultKeywords = "UX Design, Design Systems, Digital Twins, Portfolio";

  // Dynamic values
  const pageTitle = frontmatter.title
    ? `${frontmatter.title} | Yen-tsen Ansin Liu`
    : defaultTitle;
  const pageDescription = frontmatter.desc || defaultDescription;
  const pageOgImage = frontmatter.coverImage?.publicURL
    ? frontmatter.coverImage.publicURL
    : defaultOgImage;

  return (
    <Layout className="portfolio-content">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={defaultKeywords} />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <html lang="en" />
      </Helmet>
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
