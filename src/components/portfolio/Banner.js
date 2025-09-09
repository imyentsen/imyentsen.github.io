import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Banner({ frontmatter }) {
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imageData = getImage(frontmatter.coverImage);

  useEffect(() => {
    // 圖片先開始動畫
    const imageTimer = setTimeout(() => {
      setImageVisible(true);
    }, 100);

    // 文字延遲 300ms 後開始動畫
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 400); // 圖片 100ms + 300ms delay

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

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

        {/* GatsbyImage with fade up animation */}
        {imageData && (
          <div className={`transition-all duration-600 ease-out ${
            imageVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-[30px]'
          }`}>
            <GatsbyImage
              image={imageData}
              alt={frontmatter.title || "Cover Image"}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[648px] rounded-md"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        <div className="content-container lg:px-6 md:px-3 px-2">
          {/* Text content with delayed fade up animation */}
          <div className={`py-6 max-w-[720px] lg:pb-20 transition-all duration-600 ease-out ${
            textVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-[180px]'
          }`}>
            <div className="flex items-center gap-8 mb-9 font-['Syne'] font-normal text-base text-[#555555]">
              <span>{frontmatter.org}</span>
              <span>{frontmatter.year}</span>
            </div>
            <div className="font-['Syne'] font-normal text-[18px] text-[#555555] leading-normal">
              {frontmatter.desc}
            </div>
          </div>

          {/* Decorative dots with same animation as text */}
          <div className={`px-0 lg:pb-20 pb-8 transition-all duration-600 ease-out ${
            textVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-[80px]'
          }`}>
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
