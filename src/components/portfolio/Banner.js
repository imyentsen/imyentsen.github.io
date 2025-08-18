import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Banner({ frontmatter }) {
  const imageData = getImage(frontmatter.coverImage);
  if (!imageData) {
    return null; // or a fallback component
  }

  return (
    <section className="w-full">
      <div className="">
        <div className="content-container lg:px-6 md:px-3 px-2">
          <div className="py-8">
            <h1 className="font-['Syne'] font-medium text-[32px] leading-none text-foreground">
              {frontmatter.title}
            </h1>
          </div>

        </div>

          {/* GatsbyImage with class for size */}
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={frontmatter.title || "Cover Image"}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[648px] rounded-md"
              style={{ objectFit: "cover" }}
            />
          )}
<div className="content-container lg:px-6 md:px-3 px-2">
          <div className="py-6 max-w-[720px] lg:pb-20">
            <div className="flex items-center gap-8 mb-9 font-['Syne'] font-normal text-base text-[#555555]">
              <span>{frontmatter.org}</span>
              <span>{frontmatter.year}</span>
            </div>
            <div className="font-['Syne'] font-normal text-[18px] text-[#555555] leading-normal">
              {frontmatter.desc}
            </div>
          </div>

          {/* Decorative dots */}
          <div className="px-0 lg:pb-20 pb-8">
            <div className="flex items-center gap-3">
              {Array.from({ length: 14 }, (_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-[#ccc] rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
