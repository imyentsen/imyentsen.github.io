import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState, useEffect, useRef } from "react";

// 統一字體類別定義
const fontClasses = {
  syne: "font-syne",
  dmSans: "font-dm-sans",
};

// 把描述字串中的特定詞轉成超連結元件，管理 hover 狀態
function DescriptionWithLinks({ text, links, hoverSlug, setHoverSlug }) {
  let parts = [text];
  links.forEach(({ text: linkText, slug }) => {
    let newParts = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const splitParts = part.split(linkText);
        for (let i = 0; i < splitParts.length; i++) {
          if (i > 0) {
            newParts.push(
              <span
                key={slug + "-" + i}
                onMouseEnter={() => setHoverSlug(slug)}
                onMouseLeave={() => setHoverSlug(null)}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = slug;
                }}
                className={`${fontClasses.syne} text-[18px] text-black underline cursor-pointer md:hover:no-underline md:hover:opacity-70 transition-opacity`}
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

// 單張卡片 - 不再自己監聽滾動，接收 scrollProgress props
function HighlightCard({ title, slug, coverImage, highlightImage, useHighlightImage, hoverSlug, setHoverSlug, imagesVisible, scrollProgress }) {
  const image = getImage(useHighlightImage ? highlightImage : coverImage);
  const isHovered = hoverSlug === slug;

  return (
    <Link to={slug} className="block w-full">
      <div
        onMouseEnter={() => setHoverSlug(slug)}
        onMouseLeave={() => setHoverSlug(null)}
        className={`box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full group cursor-pointer md:transition-all duration-600 ease-out ${
          imagesVisible 
            ? 'opacity-100 md:transform md:translate-y-0' 
            : 'opacity-0 md:transform md:translate-y-[30px]'
        }`}
      >
        {/* 封面圖片 - 只有圖片區域有底色 */}
        {image && (
          <div className="w-full relative" style={{ backgroundColor: '#e2e2e2ff' }}>
            <div 
              style={{
                opacity: imagesVisible ? Math.max(0.1, 1 - scrollProgress) : 0
              }}
            >
              <GatsbyImage
                image={image}
                alt={title}
                style={{ height: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                className="bg-white"
              />
              {/* Gradient overlay - 統一使用 isHovered 控制 */}
              <div className={`absolute left-0 bottom-0 w-full h-1/3 pointer-events-none md:transition-opacity bg-gradient-to-t from-white to-transparent ${isHovered ? "md:opacity-70" : "opacity-0"}`} />
            </div>
          </div>
        )}

        {/* Title row - 使用與圖片相同的 scrollProgress */}
        <div 
          className={`pb-2 box-border content-stretch flex flex-row ${fontClasses.syne} gap-2 items-start justify-start leading-none p-0 relative shrink-0 text-black text-[18px] text-left w-full md:transition-opacity ${isHovered ? "md:opacity-70" : "opacity-100"}`}
          style={{
            opacity: imagesVisible ? Math.max(0.1, 1 - scrollProgress) : 0
          }}
        >
          <div className="grow">
            <p className={`block leading-normal md:transition-all ${isHovered ? "md:no-underline" : "underline"}`}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// HighlightCategory - 統一管理所有滾動監聽
function HighlightCategory({
  title,
  description,
  clients,
  links,
  highlights,
  hoverSlug,
  setHoverSlug,
  useHighlightImage = false,
  textVisible,
  imagesVisible,
}) {
  const [textScrollProgress, setTextScrollProgress] = useState(0);
  const [imagesScrollProgress, setImagesScrollProgress] = useState(0);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    // 檢查是否在 1024px
    const checkDesktop = () => window.innerWidth >= 1024; // lg breakpoint

    const handleScroll = () => {
      if (!checkDesktop()) {
        setTextScrollProgress(0);
        setImagesScrollProgress(0);
        return;
      }

      // 處理文字區塊淡出
      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        if (textRect.top <= 0) {
          const progress = Math.min(1, Math.max(0, (-textRect.top) / (textRect.height * 0.3)));
          setTextScrollProgress(progress);
        } else {
          setTextScrollProgress(0);
        }
      }

      // 處理圖片區塊淡出 - 統一監聽所有圖片
      if (imagesRef.current) {
        const imagesRect = imagesRef.current.getBoundingClientRect();
        if (imagesRect.top <= -(imagesRect.height * 0.5)) {
          const progress = Math.min(1, Math.max(0, (-(imagesRect.height * 0.5) - imagesRect.top) / (imagesRect.height * 0.5)));
          setImagesScrollProgress(progress);
        } else {
          setImagesScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // 初始檢查

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="box-border gap-3 grid grid-cols-1 lg:grid-cols-6 p-0 relative shrink-0 w-full">
      {/* Summary - Column 1 */}
      <div 
        ref={textRef}
        className={`lg:col-span-2 lg:pr-6 box-border content-stretch flex flex-col ${fontClasses.dmSans} gap-3 items-start justify-start leading-none p-0 lg:sticky lg:top-12 self-start shrink-0 text-[18px] text-left lg:transition-all duration-600 ease-out lg:min-h-[30vh] ${
          textVisible 
            ? 'opacity-100 lg:transform lg:translate-y-0' 
            : 'opacity-0 lg:transform lg:translate-y-[30px]'
        }`}
        style={{
          opacity: textVisible ? Math.max(0.1, 1 - textScrollProgress) : 0
        }}
      >
        {/* Section title */}
        <div className="relative shrink-0 text-black w-full">
          <p className={`${fontClasses.syne} text-[18px] block leading-normal`}>{title}</p>
        </div>
        {/* Description (hidden on mobile) */}
        <div className="relative shrink-0 text-[#767676] w-full hidden lg:block">
          <DescriptionWithLinks
            text={description}
            links={links}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
          />
        </div>
        {/* Clients (hidden on mobile) */}
        <div className="relative shrink-0 text-[#767676] w-full hidden lg:block">
          <p className="text-[16px]">{clients}</p>
        </div>
      </div>

      {/* Cards - Columns 3-6 on desktop */}
      <div ref={imagesRef} className="lg:col-span-4 box-border content-stretch flex flex-col md:flex-col gap-3 items-start justify-start p-0 relative self-start shrink-0 w-full">
        {highlights.map((post, index) => (
          <HighlightCard
            key={post.frontmatter.slug}
            title={post.frontmatter.title}
            slug={post.frontmatter.slug}
            coverImage={post.frontmatter.coverImage}
            highlightImage={post.frontmatter.highlightImage}
            useHighlightImage={useHighlightImage}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            imagesVisible={imagesVisible}
            scrollProgress={imagesScrollProgress} // 傳入統一的滾動進度
          />
        ))}
      </div>
    </div>
  );
}

// HighlightSection
export default function HighlightSection() {
  const [hoverSlug, setHoverSlug] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    // "Selected Work" 標題在 Banner 完成後開始動畫
    const headerTimer = setTimeout(() => {
      setHeaderVisible(true);
    }, 450); // TopNav + Banner delay

    // 左邊文字部分開始動畫
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 650); // 前面 delay

    // 圖片部分再 150ms 後開始動畫
    const imagesTimer = setTimeout(() => {
      setImagesVisible(true);
    }, 950); // 前面 delay

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(textTimer);
      clearTimeout(imagesTimer);
    };
  }, []);

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
                  aspectRatio: 1.778
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

  return (
    <section className="relative shrink-0 w-full pt-6 sm:pt-0">
      <div className="relative size-full">
        {/* Section Header - "Selected Work" 只有 fade in */}
        <div className={`box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-6 pt-20 lg:px-6 md:px-3 px-2 relative w-full lg:transition-opacity duration-600 ease-out ${
          headerVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`${fontClasses.syne} text-[18px] leading-none relative shrink-0 text-black text-left text-nowrap flex flex-col gap-3`}>
            <p className="block leading-normal whitespace-pre">Selected work</p>
          </div>
        </div>

        {/* Highlight Content */}
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start lg:px-6 md:px-3 px-2 relative w-full">
          <HighlightCategory
            title="Design System"
            description="I've led key design system initiatives in multi-national enterprise settings, including a major design system upgrade and object-oriented UX operations to better align patterns with user workflows."
            clients="Design systems powering solutions used by ExxonMobil, Aker BP, and SBM Offshore."
            links={[
              { text: "major design system upgrade", slug: "/not-just-a-new-design-system" },
              { text: "object-oriented UX operations", slug: "/mapping-undefined-objects" },
            ]}
            highlights={highlightsDS}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            useHighlightImage={true}
            textVisible={textVisible}
            imagesVisible={imagesVisible}
          />

          <HighlightCategory
            title="Product Design"
            description="Working as a product design consultant and a startup founder, I led full-cycle research and design for MVPs — including a marketing tech SaaS product and a hardware-driven audio experience."
            clients="Created solutions adopted by organizations including Pfizer, L'Occitane, Uber, Amnesty International, and Seagate."
            links={[
              { text: "marketing tech SaaS product", slug: "/turn-a-consultancy-service-into-a-saas-product" },
              { text: "hardware-driven audio experience", slug: "/redefine-music-listening-for-the-deaf" },
            ]}
            highlights={highlightsProduct}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            useHighlightImage={true}
            textVisible={textVisible}
            imagesVisible={imagesVisible}
          />
        </div>
      </div>
    </section>
  );
}
