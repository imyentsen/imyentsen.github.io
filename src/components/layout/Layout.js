import TopNav from "./TopNav";
import Footer from "./Footer";
import React from 'react';
import "../../globals.css";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`page-container relative min-h-screen flex flex-col ${className}`}>
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}