import TopNav from "./TopNav";
import Footer from "./Footer";
import React from 'react';
import { Helmet } from "react-helmet";
import "../../globals.css";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`page-container relative min-h-screen flex flex-col ${className}`}>
      <Helmet>
        <title>Yen-tsen Ansin Liu's Portfolio</title>
        <meta name="description" content="Growing scalable user experience" />
        <meta name="keywords" content="UX Design, Design Systems, Digital Twins, Portfolio" />
        <meta property="og:image" content="/og-image.jpg" />
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