import React from "react";
import About from "./HomeAbout/About";
import HomeBanner from "./HomeBanner/HomeBanner";
import ParalexScroll from "./ParalexScroll/ParalexScroll";

const Home = () => {
  return (
    <div className="bg-black ">
      <HomeBanner></HomeBanner>
      <About></About>
      <ParalexScroll></ParalexScroll>
    </div>
  );
};

export default Home;
