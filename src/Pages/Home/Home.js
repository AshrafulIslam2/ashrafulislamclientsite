import React from "react";
import About from "./HomeAbout/About";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div className="bg-black">
      <HomeBanner></HomeBanner>
      <About></About>
    </div>
  );
};

export default Home;
