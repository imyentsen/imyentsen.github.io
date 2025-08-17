import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function ProjectCard({ title, org, year, href, coverImage }) {
  // coverImage 已經是 getImage() 回傳的 GatsbyImageData 了
  return (
    <Link to={href} className="block group cursor-pointer w-full">
      <div className="box-border flex flex-col gap-2 items-start p-0 relative self-start shrink-0 w-full">
        <div className="shrink-0 w-full group-hover:opacity-80 transition-opacity">
          {coverImage ? (
            <GatsbyImage image={coverImage} alt={title} style={{ width: "100%" }} className="bg-white rounded-md"/>
          ) : (
            <img
              src="/fallback-image.jpg"
              alt="Fallback coverImage"
              style={{ width: "100%" }}
            />
          )}
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
