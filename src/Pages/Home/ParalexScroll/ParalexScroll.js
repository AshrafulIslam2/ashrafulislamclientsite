import React, { useRef } from "react";

import project1 from "../../../Assets/shikka.png";
import project2 from "../../../Assets/avoidrafa.png";
import project3 from "../../../Assets/picomabd.png";
import project4 from "../../../Assets/ai.png";
import project5 from "../../../Assets/ollyo.png";
import { easeInOut, motion, useScroll } from "framer-motion";

const ParalexScroll = () => {
  const Refs = useRef(null);

  const { scrollYProgress } = useScroll({
    target: Refs,

    offset: ["0 1", "0 0"],
  });

  return (
    <motion.div
      ref={Refs}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="">
        <div className=" grid grid-cols-2 items-center bg-white  rounded-lg   ">
          <div className="m-[40px] flex flex-col gap-y-2">
            <h1 className="text-black text-[10px]">
              <span className="font-bold text-xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-base  text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                PHP
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                LARAVEL
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                AWS
              </li>
            </ul>
            <div>
              <h1 className="text-slate-400 text-[14px]  font-medium border-b-2 inline-block ">
                My Contribution
              </h1>
              <h1 className="text-[20px] uppercase font-semibold text-[#e54b4b]">
                Front END
              </h1>
            </div>
          </div>

          <motion.img
            initial={{ rotate: -10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project1}
            className="rounded-l-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover"
            alt="shikka.xyz"
          />
        </div>
      </div>
      <div className="h-full flex ">
        <div className=" flex-grow grid grid-cols-2  items-center bg-white rounded-lg  overflow-hidden ">
          <motion.img
            initial={{ rotate: 10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project2}
            className="rounded-r-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover  "
            alt="shikka.xyz"
          />
          <div className="m-[40px] flex flex-col gap-y-2 flex-grow">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-xl">AvoidRafa</span>
            </h1>
            <p className="text-black text-base  text-justify my-[10px]">
              This is famous singer <b>AvoidRafa</b> portfolio.Make for
              demostrate up comping album,event etc.Also for saling own product
              and adution section for listing realse track.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Swiper JS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                HTML5
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                CSS3
              </li>
            </ul>
            <div>
              <h1 className="text-slate-400 text-[14px]  font-medium border-b-2 inline-block ">
                My Contribution
              </h1>
              <h1 className="text-[20px] uppercase font-semibold text-[#e54b4b]">
                Front END
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex ">
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <div className="m-[40px] flex flex-col gap-y-2 flex-grow">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-xl">PicomaBD</span>
            </h1>
            <p className="text-black text-base  text-justify my-[10px]">
              Explore the essence of craftsmanship at <b>PicomaBD</b>, a
              distinguished leader in the leather industry. Our portfolio
              unveils a rich tapestry of premium leather products, reflecting a
              legacy of quality and innovation
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>

              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>

              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Swiper JS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                CSS3
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                HTML5
              </li>
            </ul>
            <div>
              <h1 className="text-slate-400 text-[14px]  font-medium border-b-2 inline-block ">
                My Contribution
              </h1>
              <h1 className="text-[20px] uppercase font-semibold text-[#e54b4b]">
                Front END
              </h1>
            </div>
          </div>

          <motion.img
            initial={{ rotate: -10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project3}
            className="rounded-l-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover object-left"
            alt="shikka.xyz"
          />
        </div>
      </div>
      <div className=" h-full flex">
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <motion.img
            initial={{ rotate: 10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project4}
            className="rounded-r-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover "
            alt="shikka.xyz"
          />
          <div className="m-[40px] flex flex-col gap-y-2 flex-grow">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-xl">DOT AI</span>
            </h1>
            <p className="text-black text-base  text-justify my-[10px]">
              Make this for learnig purpose to increase skill and knowledge.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                React Js
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                JavaScript
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                CSS3
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                HTML5
              </li>
            </ul>
            <div>
              <h1 className="text-slate-400 text-[14px]  font-medium border-b-2 inline-block ">
                My Contribution
              </h1>
              <h1 className="text-[20px] uppercase font-semibold text-[#e54b4b]">
                Front END
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full flex">
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <div className="m-[40px] flex flex-col gap-y-2 flex-grow">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-xl">Drag and Drap Gallery</span>
            </h1>
            <p className="text-black text-base  text-justify my-[10px]">
              Make this for learnig purpose to increase skill and knowledge.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                React Js
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                JavaScript
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                CSS3
              </li>
              <li className="py-2 px-4  text-[10px] bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                HTML5
              </li>
            </ul>
            <div>
              <h1 className="text-slate-400 text-[14px]  font-medium border-b-2 inline-block ">
                My Contribution
              </h1>
              <h1 className="text-[20px] uppercase font-semibold text-[#e54b4b]">
                Front END
              </h1>
            </div>
          </div>
          <motion.img
            initial={{ rotate: 10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project5}
            className="rounded-l-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover "
            alt="shikka.xyz"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ParalexScroll;
