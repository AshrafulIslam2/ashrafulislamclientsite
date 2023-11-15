import React, { useRef } from "react";

import project1 from "../../../Assets/shikka.png";
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
      className="flex flex-col gap-4 w-[1100px] mx-auto"
    >
      <div>
        <div className=" grid grid-cols-2 items-center bg-white  rounded-lg   ">
          <div className="m-[40px] flex flex-col gap-y-2">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-2xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-lg  text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                PHP
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                LARAVEL
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
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
            className="rounded-lt-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover"
            alt="shikka.xyz"
          />
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <motion.img
            initial={{ rotate: -10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project1}
            className="rounded-lt-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover  "
            alt="shikka.xyz"
          />
          <div className="m-[40px] flex flex-col gap-y-2">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-2xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-lg  text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                PHP
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                LARAVEL
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
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
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <div className="m-[40px] flex flex-col gap-y-2">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-2xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-lg  text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                PHP
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                LARAVEL
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
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
            className="rounded-lt-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover "
            alt="shikka.xyz"
          />
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-2 items-center bg-white rounded-lg  overflow-hidden ">
          <motion.img
            initial={{ rotate: -10, opacity: 0 }} // Set initial rotation to 30 degrees
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            src={project1}
            className="rounded-lt-xl shadow-2xl shadow-black h-[459px] mt-[40px]  object-cover "
            alt="shikka.xyz"
          />
          <div className="m-[40px] flex flex-col gap-y-2">
            <h1 className="text-black text-[20px]">
              <span className="font-bold text-2xl">Shikkha.xyz</span>
            </h1>
            <p className="text-black text-lg  text-justify my-[10px]">
              One-stop skill development platform that brings variety of live
              and pre-recorded courses in Bangla through which workforce can
              become skilled developing their technical and soft skills.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                Next Js
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                TAILWIND CSS
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                PHP
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                FRAMER MOTION
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
                LARAVEL
              </li>
              <li className="py-2 px-4 bg-gray-100 font-semibold border border-black/5 text-black rounded-3xl text-center">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ParalexScroll;
