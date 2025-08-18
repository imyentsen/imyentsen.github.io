import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
// 把描述字串中的特定詞轉成超連結元件，管理 hover 狀態
function DescriptionWithLinks({ text, links, hoverSlug, setHoverSlug }) {
  // links 格式： [{ text: "major design system upgrade", slug: "/not-just-a-new-design-system" }, ...]
  // 分拆文字成多段，替換匹配字串成 span
  let parts = [text];
  links.forEach(({ text: linkText, slug }) => {
    let newParts = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const splitParts = part.split(linkText);
        for (let i = 0; i < splitParts.length; i++) {
          if (i > 0) {
            // 插入超連結元件
            newParts.push(
              <span
                key={slug + "-" + i}
                onMouseEnter={() => setHoverSlug(slug)}
                onMouseLeave={() => setHoverSlug(null)}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = slug;
                }}
                className="font-['Syne',_sans-serif] text-[18px] text-black underline cursor-pointer hover:no-underline hover:opacity-70 transition-opacity"
              >
                {linkText}
              </span>
            );
          }
          if (splitParts[i]) newParts.push(splitParts[i]);
        }
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return (
    <p className="block leading-normal">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <React.Fragment key={"text-" + i}>{part}</React.Fragment>
        ) : (
          part
        )
      )}
    </p>
  );
}

// 單張卡片
function HighlightCard({ title, slug, coverImage, highlightImage, useHighlightImage, hoverSlug, setHoverSlug }) {
  const image = getImage(useHighlightImage ? highlightImage : coverImage);
  const isHovered = hoverSlug === slug;

  return (
    <Link to={slug} className="block w-full">
      <div
        onMouseEnter={() => setHoverSlug(slug)}
        onMouseLeave={() => setHoverSlug(null)}
        className={`box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full group cursor-pointer transition-opacity 
          ${isHovered ? "opacity-80" : "opacity-100"}
        `}
      >
        {/* 封面圖片 */}
        {image && (
          <div className="w-full">
            <GatsbyImage
              image={image}
              alt={title}
              style={{ height: "100%" }}
              imgStyle={{ objectFit: "cover" }}
              className="rounded-md bg-white"
            />
          </div>
        )}

        {/* Title row */}
        <div
          className={`pb-2 box-border content-stretch flex flex-row font-['Syne',_sans-serif] gap-2 items-start justify-start leading-none p-0 relative shrink-0 text-black text-[18px] text-left w-full transition-opacity
          ${isHovered ? "opacity-70" : "opacity-100"}
          `}
        >
          <div className="grow">
            <p className="underline block leading-normal group-hover:no-underline">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// HighlightSection
export default function HighlightSection() {
  const [hoverSlug, setHoverSlug] = useState(null);

  const data = useStaticQuery(graphql`
    query HighlightPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { frontmatter: { year: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            slug
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  aspectRatio: 1.6777
                  placeholder: BLURRED
                )
              }
            }
            highlightImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  aspectRatio: 1
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);

  const highlightsDS = data.allMarkdownRemark.nodes.filter(post =>
    ["/mapping-undefined-objects", "/not-just-a-new-design-system"].includes(post.frontmatter.slug)
  );
  const highlightsProduct = data.allMarkdownRemark.nodes.filter(post =>
    [
      "/turn-a-consultancy-service-into-a-saas-product",
      "/redefine-music-listening-for-the-deaf",
    ].includes(post.frontmatter.slug)
  );

  // 前端傳檔案格式一致，HighlightCard 會自行判斷用哪張圖

  return (
    <section className="relative shrink-0 w-full pt-6 sm:pt-0">
      <div className="relative size-full">
        {/* Section Header - Always visible */}
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-6 pt-20  lg:px-6 md:px-3 px-2 relative w-full">
          <div className="font-['Syne',_sans-serif] text-[18px] leading-none relative shrink-0 text-black text-left text-nowrap">
            <p className="block leading-normal whitespace-pre">Portfolio highlight</p>
          </div>
        </div>

        {/* Highlight Content */}
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start  lg:px-6 md:px-3 px-2 relative w-full">
          <HighlightCategory
            title="Design System"
            description="I've led key design system initiatives at a multi-national enterprise setting, including a major design system upgrade and object-oriented UX operation to better align patterns with user workflows."
            links={[
              { text: "major design system upgrade", slug: "/not-just-a-new-design-system" },
              { text: "object-oriented UX operation", slug: "/mapping-undefined-objects" },
            ]}
            highlights={highlightsDS}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            useHighlightImage={true} // 這裡傳個 props 控制用 highlight 圖
          />

          <HighlightCategory
            title="Product Design"
            description="Working as a product design consultant and a startup founder, I led full-cycle research and design for MVPs — including a marketing tech SaaS product and a hardware-driven audio experience."
            links={[
              { text: "marketing tech SaaS product", slug: "/turn-a-consultancy-service-into-a-saas-product" },
              { text: "hardware-driven audio experience", slug: "/redefine-music-listening-for-the-deaf" },
            ]}
            highlights={highlightsProduct}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            useHighlightImage={true}
          />
        </div>
      </div>
    </section>
  );
}

// HighlightCategory 保留不動，只需在地使用 HighlightCard 時傳入 useHighlightImage
function HighlightCategory({
  title,
  description,
  links,
  highlights,
  hoverSlug,
  setHoverSlug,
  useHighlightImage = false,
}) {
  return (
    <div className="box-border gap-3 grid grid-cols-1 lg:grid-cols-6 p-0 relative shrink-0 w-full">
      {/* Summary - Column 1 */}
      <div className="lg:col-span-2 lg:pr-6 box-border content-stretch flex flex-col font-['DM Sans',_sans-serif] gap-3 items-start justify-start leading-none p-0 relative self-start shrink-0 text-[18px] text-left">
        {/* Section title */}
        <div className="relative shrink-0 text-black w-full">
          <p className="font-['syne',_sans-serif] text-[18px] block leading-normal">{title}</p>
        </div>
        {/* Description (hidden on mobile) */}
        <div className="relative shrink-0 text-[#767676] w-full hidden md:block">
          <DescriptionWithLinks
            text={description}
            links={links}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
          />
        </div>
      </div>

      {/* Cards - Columns 3-6 on desktop */}
      <div className="lg:col-span-4 box-border content-stretch flex flex-col md:flex-row gap-3 items-start justify-start p-0 relative self-start shrink-0 w-full">
        {highlights.map((post) => (
          <HighlightCard
            key={post.frontmatter.slug}
            title={post.frontmatter.title}
            slug={post.frontmatter.slug}
            coverImage={post.frontmatter.coverImage}
            highlightImage={post.frontmatter.highlightImage}
            useHighlightImage={useHighlightImage}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
          />
        ))}
      </div>
    </div>
  );
}
