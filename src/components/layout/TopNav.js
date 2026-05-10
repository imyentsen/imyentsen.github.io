import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from 'react';
import { useLang, getAlternatePath } from "../../i18n/useLang";
import { locales } from "../../i18n/locales";

export default function TopNav() {
  const [isVisible, setIsVisible] = useState(false);
  const lang = useLang();
  const t = locales[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleLangSwitch = () => {
    if (typeof window === "undefined") return;
    const alternate = getAlternatePath(window.location.pathname);
    navigate(alternate);
  };

  return (
    <nav className={`relative shrink-0 w-full transition-opacity duration-600 ease-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-between p-6 lg:px-6 md:px-3 px-2 relative w-full">
          <Link
            to={lang === "zh" ? "/zh/" : "/"}
            className="font-syne text-[20px] leading-none relative shrink-0 text-black text-left text-nowrap hover:opacity-60 transition-opacity cursor-pointer"
          >
            Yen-tsen Ansin Liu
          </Link>
          <div className="font-syne text-[16px] leading-none shrink-0 flex items-center">
            <span
              onClick={lang !== "zh" ? handleLangSwitch : undefined}
              className={lang === "zh"
                ? "text-black cursor-default"
                : "text-[#767676] underline cursor-pointer hover:text-black transition-colors"}
            >zh-tw</span>
            <span className="text-[#767676] px-1 cursor-default select-none"> | </span>
            <span
              onClick={lang !== "en" ? handleLangSwitch : undefined}
              className={lang === "en"
                ? "text-black cursor-default"
                : "text-[#767676] underline cursor-pointer hover:text-black transition-colors"}
            >eng</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
