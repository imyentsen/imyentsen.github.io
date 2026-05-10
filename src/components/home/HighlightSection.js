import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState, useEffect, useRef } from "react";
import { useLang, slugWithLang } from "../../i18n/useLang";
import { locales } from "../../i18n/locales";

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
function HighlightCard({ title, org, year, slug, coverImage, highlightImage, useHighlightImage, hoverSlug, setHoverSlug, imagesVisible, scrollProgress }) {
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
          className={`pb-2 box-border content-stretch flex flex-row ${fontClasses.syne} gap-2 items-end justify-start leading-none p-0 relative shrink-0 text-black text-[18px] text-left w-full md:transition-opacity ${isHovered ? "md:opacity-70" : "opacity-100"}`}
          style={{
            opacity: imagesVisible ? Math.max(0.1, 1 - scrollProgress) : 0
          }}
        >
          <div className="grow">
            <p className={`block leading-normal md:transition-all ${isHovered ? "md:no-underline" : "underline"}`}>
              {title}
            </p>
          </div>
          {(org || year) && (
            <div className="hidden md:block shrink-0 text-right text-[#767676] whitespace-nowrap">
              <p className="block leading-normal">{[org, year].filter(Boolean).join(" · ")}</p>
            </div>
          )}
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
  lang,
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
          <p className={`${fontClasses.syne} text-[18px] block leading-normal ${lang === 'zh' ? 'font-medium' : ''}`}>{title}</p>
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
            org={post.frontmatter.org}
            year={post.frontmatter.year}
            slug={slugWithLang(post.frontmatter.slug, lang)}
            coverImage={post.frontmatter.coverImage}
            highlightImage={post.frontmatter.highlightImage}
            useHighlightImage={useHighlightImage}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            imagesVisible={imagesVisible}
            scrollProgress={imagesScrollProgress}
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
  const lang = useLang();
  const t = locales[lang];

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
          fields {
            lang
          }
          frontmatter {
            title
            slug
            org
            year
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

  // 依目前語言過濾，en posts 的 fields.lang 預設為 "en"
  const langPosts = data.allMarkdownRemark.nodes.filter(
    post => (post.fields?.lang || "en") === lang
  );

  const highlightsDS = langPosts.filter(post =>
    t.highlightSlugsDS.includes(post.frontmatter.slug)
  );
  const highlightsProduct = langPosts.filter(post =>
    t.highlightSlugsProduct.includes(post.frontmatter.slug)
  );

  return (
    <section className="relative shrink-0 w-full pt-6 sm:pt-0">
      <div className="relative size-full">
        {/* Section Header - "Selected Work" 只有 fade in */}
        <div className={`box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-6 pt-20 lg:px-6 md:px-3 px-2 relative w-full lg:transition-opacity duration-600 ease-out ${
          headerVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`${fontClasses.syne} text-[18px] leading-none relative shrink-0 text-black text-left text-nowrap flex flex-col gap-3`}>
            <p className={`block leading-normal whitespace-pre ${lang === 'zh' ? 'font-medium' : ''}`}>{t.selectedWork}</p>
          </div>
        </div>

        {/* Highlight Content */}
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start lg:px-6 md:px-3 px-2 relative w-full">
          <HighlightCategory
            title={t.dsTitle}
            description={t.dsDesc}
            clients={t.dsClients}
            links={[
              { text: t.dsLink1Text, slug: slugWithLang(t.dsLink1Slug, lang) },
              { text: t.dsLink2Text, slug: slugWithLang(t.dsLink2Slug, lang) },
            ]}
            highlights={highlightsDS}
            lang={lang}
            hoverSlug={hoverSlug}
            setHoverSlug={setHoverSlug}
            useHighlightImage={true}
            textVisible={textVisible}
            imagesVisible={imagesVisible}
          />

          <HighlightCategory
            title={t.pdTitle}
            description={t.pdDesc}
            clients={t.pdClients}
            links={[
              { text: t.pdLink1Text, slug: slugWithLang(t.pdLink1Slug, lang) },
              { text: t.pdLink2Text, slug: slugWithLang(t.pdLink2Slug, lang) },
            ]}
            highlights={highlightsProduct}
            lang={lang}
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
