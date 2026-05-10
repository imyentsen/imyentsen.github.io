import React, { useEffect, useState } from 'react';
import { useLang } from "../../i18n/useLang";
import { locales } from "../../i18n/locales";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const lang = useLang();
  const t = locales[lang];

  useEffect(() => {
    // Banner 在 TopNav 完成後 150ms 開始動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // TopNav 50ms + 150ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative shrink-0 w-full transition-opacity duration-600 ease-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="relative size-full">
        {/* 三欄 grid，gap 用來控制欄間空白 */}
        <div className="box-border flex flex-col gap-3 lg:px-6 md:px-3 px-2 pt-12 lg:pt-6 relative w-full
          lg:grid lg:[grid-template-columns:3fr_2fr_1fr] lg:gap-3 lg:items-start lg:justify-start">

          {/* Summary - Left column，右邊加右邊框線(分隔線)*/}
          <div className="relative text-[18px] flex flex-col gap-3 pr-3 items-start justify-start min-w-0 p-0 shrink-0 w-full lg:w-auto">
            <div className="absolute top-0 right-0 h-full w-px bg-[#dfdfdf] hidden lg:block" />
            <p className="font-dm-sans text-[#767676] leading-normal z-10 relative">
              {t.bannerSummary1}
              <span className="text-black">{t.bannerSpecialty1}</span>
              {t.bannerSummary2}
              <span className="text-black">{t.bannerSpecialty2}</span>
              {t.bannerSummary3}
              <span className="text-black">{t.bannerSpecialty3}</span>
              {t.bannerSummary4}<br/>
              {t.bannerEdu}
              <span className="text-black">{t.bannerSchool}</span>
              {t.bannerEduSuffix}
            </p>
          </div>

          {/* Work Experience - Center column，左右各有1px邊框（分隔線）*/}
          <div className="relative hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 px-3 shrink-0 w-full lg:w-auto">
            <div className="absolute top-0 right-0 h-full w-px bg-[#dfdfdf]" />
            <div className="flex flex-col text-[#767676] text-[18px] leading-normal relative z-10">

            <span className="font-syne text-[18px] block leading-normal relative z-10 text-[#767676]">{t.workExperience}</span>
              <div>
                <span className="font-syne text-black">Aize AS</span> <span className="pl-2 text-[#767676] text-[16px]">Norway, 2022 - Present</span>
              </div>
              <div>
                <span className="font-syne text-black">Dualai Design Ltd.</span><span className="pl-2 text-[#767676] text-[16px]">Taiwan, 2021 - 2022</span>
              </div>
              <div>
                <span className="font-syne text-black">Rearia Ltd.</span><span className="pl-2 text-[#767676] text-[16px]">Taiwan, 2019 - 2021</span>
              </div>
            </div>
          </div>

          {/* Contact - Right column */}
          <div className="hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 pl-3 shrink-0 w-full lg:w-auto">
            <div className="flex flex-col font-syne text-[18px]">
              <div>
                <span className="text-[#767676] font-syne text-[18px] block leading-normal">{t.contact}</span></div>
              <a
                className="text-black underline block cursor-pointer leading-normal whitespace-pre hover:opacity-70 hover:no-underline transition-opacity"
                href="mailto:imyentsen@gmail.com"
              >
                Email
              </a>
              <a
                className="text-black underline block leading-normal whitespace-pre hover:opacity-70 hover:no-underline transition-opacity cursor-pointer"
                href="https://www.linkedin.com/in/yentsenliu/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
