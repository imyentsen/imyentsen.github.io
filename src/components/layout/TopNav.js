import { Link, navigate } from "gatsby"
import React, { useEffect, useRef, useState } from 'react';
import { useLang, getAlternatePath } from "../../i18n/useLang";

const LANG_OPTIONS = [
  { code: "en", label: "English", htmlLang: "en" },
  { code: "zh", label: "正體中文", htmlLang: "zh-Hant-TW" },
];

function LangDropdown({ lang }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const optionRefs = useRef([]);
  const current = LANG_OPTIONS.find((o) => o.code === lang) || LANG_OPTIONS[0];

  // 點選單外面或按 Esc 就關閉
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // 打開時把焦點移到目前選中的語言，方便鍵盤操作
  useEffect(() => {
    if (!open) return;
    const idx = LANG_OPTIONS.findIndex((o) => o.code === lang);
    optionRefs.current[idx >= 0 ? idx : 0]?.focus();
  }, [open, lang]);

  const select = (code) => {
    setOpen(false);
    if (code === lang || typeof window === "undefined") return;
    navigate(getAlternatePath(window.location.pathname));
  };

  const onOptionKeyDown = (e, idx) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next =
        (idx + (e.key === "ArrowDown" ? 1 : -1) + LANG_OPTIONS.length) %
        LANG_OPTIONS.length;
      optionRefs.current[next]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative font-syne text-[16px] leading-none shrink-0">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex items-center gap-1.5 text-black hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span lang={current.htmlLang}>{current.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          aria-label="Language"
          className="absolute right-0 top-full mt-2 z-50 min-w-[128px] bg-background border border-divider shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {LANG_OPTIONS.map((o, idx) => {
            const isCurrent = o.code === lang;
            return (
              <li key={o.code} role="none">
                <button
                  ref={(el) => (optionRefs.current[idx] = el)}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isCurrent}
                  lang={o.htmlLang}
                  onClick={() => select(o.code)}
                  onKeyDown={(e) => onOptionKeyDown(e, idx)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left whitespace-nowrap cursor-pointer transition-colors hover:bg-[#f4f4f4] focus:bg-[#f4f4f4] focus:outline-none ${
                    isCurrent ? "text-black" : "text-[#767676] hover:text-black"
                  }`}
                >
                  <span>{o.label}</span>
                  {isCurrent && (
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2 6.5 4.75 9 10 3" fill="none" stroke="currentColor" strokeWidth="1.25" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function TopNav() {
  const [isVisible, setIsVisible] = useState(false);
  const lang = useLang();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`relative z-40 shrink-0 w-full transition-opacity duration-600 ease-out ${
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
          <LangDropdown lang={lang} />
        </div>
      </div>
    </nav>
  );
}
