import React from "react";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/home/Banner";
import HighlightSection from "../../components/home/HighlightSection";
import AllProjectsSection from "../../components/home/AllProjectsSection";

export default function ZhHomePage() {
  return (
    <Layout>
      <Banner />
      <HighlightSection />
      <AllProjectsSection />
    </Layout>
  );
}
