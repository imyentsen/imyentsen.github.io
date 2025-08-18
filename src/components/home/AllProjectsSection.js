import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import ProjectCard from "./ProjectCard"; 


export default function AllProjectsSection() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___year], order: DESC }) {
        nodes {
          frontmatter {
            title
            org
            year
            slug
            coverImage {
              childImageSharp {
                gatsbyImageData(width: 600, aspectRatio: 1.7777777, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

// 這是 highlight 區的所有被 highlight 文章的 slug
  const highlightSlugs = [
    "/not-just-a-new-design-system",
    "/mapping-undefined-objects",
    "/turn-a-consultancy-service-into-a-saas-product",
    "/redefine-music-listening-for-the-deaf"
  ];

  const projects = data.allMarkdownRemark.nodes
    .filter(node => !highlightSlugs.includes(node.frontmatter.slug)) // 過濾掉 highlight 的 slug
    .map(node => ({
      title: node.frontmatter.title,
      org: node.frontmatter.org,
      year: node.frontmatter.year,
      href: node.frontmatter.slug,
      image: node.frontmatter.coverImage ? getImage(node.frontmatter.coverImage) : null,
    }));

  return (
    <section className="relative shrink-0 w-full">
      <div className="relative size-full">

        {/* Sticky Filter Section */}
        <div className="sticky top-0 z-10">
          <div className="box-border content-stretch flex flex-col sm:flex-row font-['Syne',_sans-serif] gap-2 items-start justify-start leading-none pb-6 pt-6 mt-14  lg:px-6 md:px-3 px-2 relative text-[20px] text-left w-full">
            <div className="flex flex-wrap gap-2 items-center">
              <div className="relative shrink-0 text-black">
                <p className="block leading-normal text-nowrap whitespace-pre">More projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="box-border  py-6  lg:px-6 md:px-3 px-2 pt-0 relative w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                org={project.org}
                year={project.year}
                href={project.href}
                coverImage={project.image} // 正確傳入 coverImage
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
