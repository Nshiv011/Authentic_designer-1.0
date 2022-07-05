import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/atoms/footer/footer";
import Notice from "../components/organisms/Home/NoticeBoardSection";
import TopHeroSection from "../components/organisms/Home/TopHeroSection";
import Video from "../components/organisms/Home/VideoSection";
import WhatWeDo from "../components/organisms/Home/whatWeDoSection";
import WhoWeAre from "../components/organisms/Home/whoWeAreSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title> Foundation Shurwaat </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <TopHeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <Video />
      <Notice />

      <Footer />
    </>
  );
};

export default Index;
