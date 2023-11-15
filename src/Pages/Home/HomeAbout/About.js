import React, { useRef } from "react";
import "./About.css";
import { AiFillCaretRight } from "react-icons/ai";
import project1 from "../../../Assets/shikka.png";
import { motion, useScroll, useTransform } from "framer-motion";
const About = () => {
  const Refs = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Refs,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div>
      <div className="md:flex lg:flex  p-[16px]">
        <div className="">
          {/* <img
            className="max-w-[400px] border-4 border-black"
            src="https://i.ibb.co/pJpX6TF/image8.jpg"
            alt=""
            srcset=""
          /> */}
        </div>
        <div className=" ">
          <h1
            className="antialiased tracking-[5px] text-3xl font-bold about"
            id="about"
          >
            About <span className="text-[#e54b4b]">ME</span>
          </h1>
          <div className="flex gap-2 items-center sm:gap-6 py-[16px]    sm:px-0 ">
            <div className="flex items-center gap-2  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <h1 className="text-[10px] sm:text-[24px] sm:text-base">
                {" "}
                Passionate{" "}
              </h1>
            </div>
            <h1>|</h1>
            <div className="flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 sm:w-6 sm:h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <h1 className="text-[10px] sm:text-[24px] sm:text-base">
                Dedicated{" "}
              </h1>
            </div>
            <h1>|</h1>
            <div className="flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 sm:w-6 sm:h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
              <h1 className="text-[10px] sm:text-[24px] sm:text-base">
                Skilled
              </h1>
            </div>
          </div>
          {/* text-sm tracking-widest lg:leading-[40px] mt-10 */}
          <p className="text-sm text-justify  lg:leading-[40px] ">
            Hello!I'm Ashraful Islam. I'm a web developer, and I'm very
            passionate and dedicated to my work.I have acquired the skills and
            knowledge necessary to make your project a success.I enjoy every
            step of the design process,from discussion and collaboration.Also I
            am familar with 3rd party API Intergation like map Api etc.
          </p>
        </div>
      </div>
      <motion.div
        ref={Refs}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="overflow-hidden"
      >
        <motion.div className="w-[1152px] grid grid-cols-2 items-center bg-white rounded-lg mb-[40px] overflow-hidden ">
          <div className="m-[40px]">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-2xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-lg text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
          </div>

          <img
            src={project1}
            className="rounded-lt-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover "
            alt="shikka.xyz"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
