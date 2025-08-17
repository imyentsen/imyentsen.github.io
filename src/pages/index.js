import Layout from "../components/layout/Layout";
import Banner from "../components/home/Banner";
import HighlightSection from "../components/home/HighlightSection";
import AllProjectsSection from "../components/home/AllProjectsSection";
import BlurCanvas from "../components/home/BlurCanvas";
import React from 'react';

export default function HomePage() {
  return (
    <Layout>
      {/* Blur canvas background */}
      <BlurCanvas />
      <Banner />
      <HighlightSection />
      <AllProjectsSection />
    </Layout>
  );
}