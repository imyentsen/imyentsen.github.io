import { Link } from "gatsby"
import React from 'react';

export default function TopNav() {
  return (
    <nav className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-6  lg:px-6 md:px-3 px-2 relative w-full">
          <Link 
            href="/" 
            className="font-['Syne',_sans-serif] text-[20px] leading-none relative shrink-0 text-black text-left text-nowrap hover:opacity-70 transition-opacity"
          >
            Yen-tsen Ansin Liu
          </Link>
        </div>
      </div>
    </nav>
  );
}