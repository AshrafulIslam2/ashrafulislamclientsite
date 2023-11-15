import React from "react";
import ashraful from "../../../Assets/ash001.png";
import { motion } from "framer-motion";

import "./Banner.css";

const HomeBanner = () => {
  return (
    <header className="md:grid md:grid-cols-2   justify-items-center  items-center rounded-lg p-[16px]  gap-4 ">
      {/* this i a image div for banner  */}
      <motion.div
        className="flex flex-col w-full    order-2 sm:order-1 "
        // initial={{
        //   opacity: 0,
        //   scale: 0,
        //   targetX: "-100px",
        //   // Change this to 3000 for 3 seconds
        // }}
        // whileInView={{
        //   opacity: 1,
        //   scale: 1,
        //   targetX: 0,
        //   transition: { stiffness: spring, duration: 3, ease: easeInOut }, // Change this to 3000 for 3 seconds
        // }}
      >
        <motion.h1
          className="text-base text-left  font-extrabold tracking-widest leading-loose mt-6  text-white"
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hello I AM,
        </motion.h1>
        <div className="text-center uppercase text-[30px] sm:text-[70px] md:text-[40px] lg:text-[55px] xl:text-[60px]  font-sans font-bold  flex  text-white">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            whileInView={{}}
            transition={{ duration: 2 }}
          >
            Ashraful Islam
          </motion.h1>
        </div>
        <motion.p
          className="position   text-[20px] lg:text-[30px]  uppercase  text-white  font-sans font-semibold "
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 3, delay: 2 }}
        >
          FRONT-END DEVELOPER
        </motion.p>
        <motion.p
          className="text-white    font-thin font-mono tracking-widest"
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 3, delay: 2 }}
        >
          Passionate about learning new skills, and Ready to take any challenge
          of any level.
        </motion.p>
        <button className=" text-[#e54b4b] mt-2 flex justify-start hover:text-white active:scale-95 italic hover:not-italic  transition-all ease-in-out   duration-500 ">
          <a
            className="  duration-300  hover:underlie  text-[10px] sm:text-base  font-sans  leading-loose"
            href="https://drive.google.com/file/d/1oBaMi7b1dc8wteboyL0V5cjAfAdDhn7U/view?usp=sharing"
            target="_blank"
            download
            rel="noreferrer"
          >
            Download CV
          </a>
        </button>
      </motion.div>
      <motion.div
        className=" order-1 sm:order-2 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 10 }}
      >
        <img
          src={ashraful}
          className=" shadow-2xl  hover:shadow-white   transition-all duration-500 ease-in-out   rounded-xl   object-cover w-full scale-110"
          alt=""
          srcset=""
        />
      </motion.div>
    </header>
  );
};

export default HomeBanner;
