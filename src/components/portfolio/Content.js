import React, { useEffect } from "react";
import Outline from "./Outline";

export default function Content({ markdownHtml, markdownRaw, title }) {
  const createSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9一-鿿㐀-䶿\s-]/g, "")
      .replace(/[\s]+/g, "-")
      .replace(/(^-|-$)/g, "");

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

  // 處理外部連結的功能
  useEffect(() => {
    const handleExternalLinks = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const links = article.querySelectorAll('a[href]');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        // 判斷是否為外部連結
        const isExternal = href && (
          href.startsWith('http://') || 
          href.startsWith('https://') ||
          href.startsWith('//')
        ) && !href.includes(window.location.hostname);

        if (isExternal) {
          // 設定外部連結屬性
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
          
          // 檢查是否已經有外部連結圖示
          const hasIcon = link.querySelector('.external-link-icon');
          if (!hasIcon) {
            // 創建外部連結圖示和說明文字
            const iconSpan = document.createElement('span');
            iconSpan.className = 'external-link-icon';
            iconSpan.innerHTML = `
              <svg aria-hidden="true" class="inline w-4 h-4" fill="none" stroke="#4f6084ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <span class="sr-only"> (opens in new tab)</span>
            `;
            link.appendChild(iconSpan);
          }
        }
      });
    };

    // 初始處理
    handleExternalLinks();

    // 如果內容動態更新，可能需要重新處理
    const observer = new MutationObserver(handleExternalLinks);
    const article = document.querySelector('article');
    if (article) {
      observer.observe(article, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [markdownHtml]);

  if (!markdownHtml) {
    return <p className="px-6">Loading content...</p>;
  }

  const processedHtml = addHeadingIds(markdownHtml);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
        
        {/* 左側文章內容 */}
        <div className="w-full lg:px-6 md:px-3 px-2 content-container">
          <article
            className="
              prose prose-lg max-w-none
              prose-headings:font-['Syne'] prose-headings:font-medium prose-headings:pt-4 
              prose-p:text-[18px] prose-p:leading-[1.8]
              prose-img:pb-6 prose-img:mx-auto prose-img:w-full lg:prose-img:max-w-[976px] prose-img:h-auto
              prose-a:font-bold prose-a:underline prose-a:text-black prose-a:underline
              hover:prose-a:text-[#767676] hover:prose-a:no-underline
              prose-a:transition-colors prose-a:duration-200
              lg:[&>*:not(img)]:max-w-[696px] 
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

      {/* 隱藏輔助文字的樣式 */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </div>
  );
}
