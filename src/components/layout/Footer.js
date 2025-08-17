import React from "react";
import { useLocation } from "@reach/router";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12">
      <div className="mx-auto px-6 py-8">
        {/* Back to top 按鈕（非首頁才顯示） */}
        {!isHome && (
          <div className="mb-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="underline hover:no-underline text-black hover:text-gray-600 transition-colors text-base"
              aria-label="Back to top"
            >
              Back to top
            </button>
          </div>
        )}

        {/* 版權宣告 */}
        <div className="text-base text-gray-500">
          <p>© {new Date().getFullYear()} <a
            href="https://www.linkedin.com/in/yentsenliu/"
            className="underline hover:no-underline hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >Yen-tsen Ansin Liu</a></p>
        </div>
      </div>
    </footer>
  );
}
