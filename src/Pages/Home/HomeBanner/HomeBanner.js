import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "./Banner.css";

const HomeBanner = () => {
  return (
    <header className="md:grid md:grid-cols-2 sm:place-items-center mx-auto py-10  gap-x-4  rounded-lg shadow-2xl shadow-sky-700">
      {/* this i a image div for banner  */}
      <div className="flex flex-col items-center  mx-[16px]  ">
        <h1 className="text-xs  font-extrabold tracking-widest leading-loose mt-6  text-white">
          Hello I AM,
        </h1>
        <div className="text-center font-sans font-bold my-4 glow flex  text-white">
          <span>A</span>
          <span>S</span>
          <span>H</span>
          <span>R</span>
          <span>A</span>
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <h1 className="pr-2"> </h1>
          <span>I</span>
          <span>S</span>
          <span>L</span>
          <span>A</span>
          <span>M</span>
        </div>
        <p className="position   text-[20px] lg:text-[30px]  uppercase  text-white  font-sans font-semibold my-4 ">
          FRONT-END DEVELOPER
        </p>
        <p className="text-white  text-center  font-thin font-mono tracking-widest">
          Passionate about learning new skills, and Ready to take any challenge
          of any level.
        </p>
        <button className="text-[#e54b4b] mt-8 hover:text-white active:scale-95 hover:italic  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <a
            className="  duration-300  hover:underline  text-xl font-sans  leading-loose"
            href="https://drive.google.com/file/d/1gOUCTMW9AuwJSpebg38INZxeP-AD-GV8/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </button>
      </div>
      <div className="imgdiv flex justify-center px-[16px] ">
        <img
          src="https://i.ibb.co/r5zNg6G/Untitled.jpg"
          className=" shadow-2xl shadow-red-600 hover:shadow-sky-700 cursor-zoom-in  transition-all duration-500 ease-in-out active:scale-110 rounded-2xl active:cursor-zoom-out  w-[400px] h-[300px] object-cover"
          alt=""
          srcset=""
        />
      </div>
    </header>
  );
};

export default HomeBanner;
