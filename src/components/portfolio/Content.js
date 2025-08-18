import React from "react";
import Outline from "./Outline";

export default function Content({ markdownHtml, markdownRaw, title }) {
  const createSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // 加 id 並保留原 h1 屬性（class、style 等）
  const addHeadingIds = (html) => {
    if (!html) return "";
    return html.replace(
      /<h1([^>]*)>(.*?)<\/h1>/g,
      (match, attrs, text) => {
        if (/id=/.test(attrs)) return match; // 有 id 就不處理
        return `<h1${attrs} id="${createSlug(text)}">${text}</h1>`;
      }
    );
  };

  if (!markdownHtml) {
    return <p className="px-6">Loading content...</p>;
  }

  const processedHtml = addHeadingIds(markdownHtml);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        
        {/* 左側文章內容 */}
        <div className="w-full lg:px-6 md:px-3 px-2">
          <article
            className="
              prose prose-lg
              prose-headings:font-['Syne'] prose-headings:font-medium
              prose-p:text-[18px] prose-p:leading-7
              prose-img:rounded-md prose-img:mx-auto
            "
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </div>
        
        {/* 右側 Outline */}
        <div className="hidden lg:block px-4">
          <div className="sticky top-24">
            <Outline content={markdownRaw || ""} title={title || ""} />
          </div>
        </div>
      </div>
    </div>
  );
}
