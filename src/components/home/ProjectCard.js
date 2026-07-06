import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function ProjectCard({ title, org, year, href, coverImage }) {
  // coverImage 已經是 getImage() 回傳的 GatsbyImageData 了
  return (
    <Link to={href} className="block group cursor-pointer w-full">
      <div className="box-border flex flex-col gap-2 lg:pt-6 items-start p-0 relative self-start shrink-0 w-full">
        <div className="shrink-0 w-full relative">
          {coverImage && (
            <GatsbyImage image={coverImage} alt={title} loading="eager" style={{ width: "100%" }} className="bg-white"/>
          )}
          {/* Gradient overlay at bottom, appears on hover */}
          <div
            className="absolute left-0 bottom-0 w-full h-1/3 pointer-events-none
              opacity-0 group-hover:opacity-70 transition-opacity
              bg-gradient-to-t from-white to-transparent"
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          {/* Title，樣式跟 Highlight 一樣 */}
          <p className="font-['Syne',_sans-serif] text-[18px] text-black block leading-normal transition-opacity group-hover:opacity-70">
            {title}
          </p>
          {/* org + year 灰色，縮小字型 */}
          <p className="font-['Syne',_sans-serif] text-[#767676] text-[16px] block leading-normal">
            {org}, {year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
