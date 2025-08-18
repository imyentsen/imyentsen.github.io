import React from 'react';
export default function Banner() {
  return (
    <section className="relative shrink-0 w-full">
      <div className="relative size-full">
        {/* 三欄 grid，gap 用來控制欄間空白 */}
        <div className="box-border flex flex-col gap-3  lg:px-6 md:px-3 px-2 pt-12 lg:pt-6 relative w-full
          lg:grid lg:grid-cols-3 lg:gap-3 lg:items-start lg:justify-start">

          {/* Summary - Left column，右邊加右邊框線(分隔線)*/}
          <div className="relative text-[18px] flex flex-col gap-3 pr-3 items-start justify-start min-w-0 p-0 pr-3 shrink-0 w-full lg:w-auto">
            <div className="absolute top-0 right-0 h-full w-px bg-[#ddd] hidden lg:block" />
            <p className="text-[#767676] leading-normal z-10 relative">
              Senior UX designer with six years of experience, specializing in{' '}
              <span className="text-black">data-heavy design</span>,{' '}
              <span className="text-black">digital twins</span>, and{' '}
              <span className="text-black">design systems</span>.
            </p>
            <p className="text-[#767676] leading-normal z-10 relative">
              I am passionate about B2B SaaS that boosts{' '}
              <span className="text-black">productivity</span> and require{' '}
              <span className="text-black">strong domain knowledge</span>.
            </p>
            <p className="text-[#767676] leading-normal z-10 relative">
              I hold a MA in Collaborative and Industrial Design from{' '}
              <span className="text-black">Aalto University</span>, Finland.
            </p>
          </div>

          {/* Work Experience - Center column，左右各有1px邊框（分隔線）*/}
          <div className="relative hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 px-3 shrink-0">
            <div className="absolute top-0 right-0 h-full w-px bg-[#ddd]" />
            <p className="text-black font-['Syne',_sans-serif] text-[18px] block leading-normal relative z-10">Work Experience</p>
            <div className="flex flex-col gap-4 text-[#767676] text-[18px] leading-normal relative z-10">
              <div>
                <span className="text-black">Aize AS</span><br />
                2022 - Present
              </div>
              <div>
                <span className="text-black">Dualai Design Ltd.</span><br />
                2021 - 2022
              </div>
              <div>
                <span className="text-black">Rearia Ltd.</span><br />
                2019 - 2021
              </div>
            </div>
          </div>

          {/* Contact - Right column */}
          <div className="hidden lg:flex flex-col gap-3 items-start justify-start min-w-0 p-0 pl-3 shrink-0">
            <p className="text-black font-['Syne',_sans-serif] text-[18px] block leading-normal">Contact</p>
            <div className="flex flex-col gap-3 font-['Syne',_sans-serif] text-[18px]">
              <a
                className="text-[#767676] underline block cursor-pointer leading-normal whitespace-pre hover:opacity-70 hover:no-underline transition-opacity"
                href="mailto:imyentsen@gmail.com"
              >
                imyentsen[at]gmail.com
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
