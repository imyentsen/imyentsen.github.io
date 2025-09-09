import React, { useEffect, useState } from 'react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

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
            <div className="absolute top-0 right-0 h-full w-px bg-[#ddd] hidden lg:block" />
            <p className="text-[#767676] leading-normal z-10 relative">
              Senior UX Designer passionate about transforming complex data into intuitive experiences. Specializing in {' '}
              <span className="text-black">design systems</span>,{' '}
              <span className="text-black">digital twins</span>, and{' '}
              <span className="text-black">productivity-focused solutions</span>.
            </p>
            <p className="text-[#767676] leading-normal z-10 relative">
              MA in Collaborative and Industrial Design,{' '}
              <span className="text-black">Aalto University</span>, Finland.
            </p>
          </div>

          {/* Work Experience - Center column，左右各有1px邊框（分隔線）*/}
          <div className="relative hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 px-3 shrink-0 w-full lg:w-auto">
            <div className="absolute top-0 right-0 h-full w-px bg-[#ddd]" />
            <p className="text-black font-syne text-[18px] block leading-normal relative z-10">Work Experience</p>
            <div className="flex flex-col text-[#767676] text-[18px] leading-normal relative z-10">
              <div>
                <span className="font-syne text-black">Aize AS</span> <span className="pl-2 text-[#666666] text-[16px]">Norway, 2022 - Present</span>
              </div>
              <div>
                <span className="font-syne text-black">Dualai Design Ltd.</span><span className="pl-2 text-[#666666] text-[16px]">Taiwan, 2021 - 2022</span>
              </div>
              <div>
                <span className="font-syne text-black">Rearia Ltd.</span><span className="pl-2 text-[#666666] text-[16px]">Taiwan, 2019 - 2021</span>
              </div>
            </div>
          </div>

          {/* Contact - Right column */}
          <div className="hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 pl-3 shrink-0 w-full lg:w-auto">
            <p className="text-black font-syne text-[18px] block leading-normal">Contact</p>
            <div className="flex flex-col font-syne text-[18px]">
              <a
                className="text-[#767676] underline block cursor-pointer leading-normal whitespace-pre hover:opacity-70 hover:no-underline transition-opacity"
                href="mailto:imyentsen@gmail.com"
              >
                Email
              </a>
              <a
                className="text-[#767676] underline block leading-normal whitespace-pre hover:opacity-70 hover:no-underline transition-opacity cursor-pointer"
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
