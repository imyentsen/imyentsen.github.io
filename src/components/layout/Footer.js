import React from "react";
import { Link } from "gatsby"
import { useLocation } from "@reach/router";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-10">
      <div className="mx-auto lg:px-6 md:px-3 px-2 py-8">
        {/* Back to top 按鈕（非首頁才顯示） */}
        {!isHome && (
          <div className="mb-8">
            <button
              type="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-[#222] bg-[#fafafa] flex items-center justify-center hover:border-transparent hover:bg-[#7a7a7a] transition-all duration-100 group"
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5 text-[#222] group-hover:text-[#fafafa] transition-colors duration-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Footer 主要內容 */}
        <div className="mt-10 md:mt-20 pt-10 md:pt-20  border-t border-[#dfdfdf] grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* Title */}
          <div>
            <Link 
              to="/" 
              className="font-syne text-[18px] leading-none relative shrink-0 text-black text-left text-nowrap hover:opacity-60 transition-opacity cursor-pointer"
            >
              Yen-tsen Ansin Liu
            </Link>
          </div>

          {/* 聯絡方式 */}
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
            <a
              href="mailto:imyentsen@gmail.com"
              className="font-medium underline hover:no-underline hover:text-[#767676] transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/yentsenliu/"
              className="font-medium underline hover:no-underline hover:text-[#767676] transition-colors duration-200 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <svg
                aria-hidden="true"
                className="inline w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          {/* 空白 column */}
          <div></div> 
        </div>

        {/* 版權宣告 */}
        <div className="text-base text-gray-500">
          <p>© {new Date().getFullYear()} Yen-tsen Ansin Liu</p>
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
    </footer>
  );
}
