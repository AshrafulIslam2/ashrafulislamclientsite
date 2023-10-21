import React from "react";
import "./About.css";
import { AiFillCaretRight } from "react-icons/ai";
const About = () => {
  return (
    <div className="md:flex lg:flex m-8">
      <div className="mr-10">
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
        {/* text-sm tracking-widest lg:leading-[40px] mt-10 */}
        <p className="text-sm tracking-widest lg:leading-[40px] mt-10">
          Hello! I'm Ashraful Islam. I'm a web developer, and I'm very
          passionate and dedicated to my work. I have acquired the skills and
          knowledge necessary to make your project a success. I enjoy every step
          of the design process, from discussion and collaboration.Also I am
          familar with 3rd party API Intergation like map Api etc.
        </p>
        <div>
          <h1 className="text-xl expertise">Expertise Area</h1>
          <div className="grid grid-cols-3 my-4">
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>NEXT Js</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>HTML5</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>CSS3</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Java Script</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>React Js</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Redux</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Type Script</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Bootstrap</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Tailwind</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Metarial UI</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Charka UI</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Daisy UI</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Memba UI</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>Framer Motion</span>
            </div>
            <div className="flex items-center hover:bg-sky-700 py-[16px] px-[16px] hover:rounded-md hover:shadow-2xl hover:shadow-sky-700 duration-500 transition-all ease-in-out">
              <span>
                <AiFillCaretRight className="text-[#e54b4b]"></AiFillCaretRight>
              </span>
              <span>GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
