import React from "react";
import Javascript from "../../assets/Javascript.webp";
import Figma from "../../assets/Figma.svg";
import Html from "../../assets/Html.png";
import react from "../../assets/react.svg";
import css from "../../assets/css.png";
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="relative overflow-hidden flex flex-col text-white body-font"
      >
        <div className="container flex flex-wrap px-5 py-74 mx-auto items-center">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-teal-400"
          >
            <h1
              style={{ fontFamily: "FreshMango" }}
              data-aos="fade-right"
              data-aos-delay="500"
              className="px-5 py-10 text-4xl sm:text-5xl font-medium font-[Montserrat] title-font mb-4 text-gray-400 text-center"
            >
              Skills
            </h1>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="flex flex-col md:w 1/2 md:pl-12"
          >
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="w-1/2 sm:w-1/3 mb-4">
                <img
                  src={Javascript}
                  alt=""
                  className="rounded-full w-24 h-24 object-cover"
                />
              </li>
              <li className="w-1/2 sm:w-1/3 mb-4">
                <img
                  src={Figma}
                  alt=""
                  className=" w-22 h-22 object-fit cover"
                />
              </li>
              <li className="w-1/2 sm:w-1/3 mb-4">
                <img
                  src={Html}
                  alt=""
                  className=" w-28 h-28 object-fit cover"
                />
              </li>
              <li className="w-1/2 sm:w-1/3 mb-4">
                <img
                  src={react}
                  alt=""
                  className="rounded-full w-20 h-20 object-fill"
                />
              </li>
              <li className="w-1/2 sm:w-1/3 mb-4">
                <img src={css} alt="" className=" w-20 h-20 object-fill" />
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
