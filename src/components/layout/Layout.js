import TopNav from "./TopNav";
import Footer from "./Footer";
import React from 'react';
import { Helmet } from "react-helmet";
import "../../globals.css";
import useAbsoluteUrl from "../../utils/useSiteUrl";

export default function Layout({ children, className = "" }) {
  const absoluteUrl = useAbsoluteUrl();
  return (
    <div className={`page-container relative min-h-screen flex flex-col ${className}`}>
      <Helmet>
        <title>Yen-tsen Ansin Liu's Portfolio</title>
        <meta name="description" content="Growing scalable user experience" />
        <meta name="keywords" content="UX Design, Design Systems, Digital Twins, Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={absoluteUrl("/og-image.jpg")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Yen-tsen Ansin Liu's Portfolio" />
        <meta property="og:description" content="Senior UX Designer specializing in data-heavy design, digital twins, and design systems." />
        <html lang="en" />
      </Helmet>
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}