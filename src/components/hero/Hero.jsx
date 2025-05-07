import React from "react";
import Navbar from "../navbar/Navbar";
import woman from "../../assets/woman.jpg";
import CV from "./Resume.pdf";

const Hero = () => {
  return (
    <>
      <div className="gradient-animation"></div>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h[660px] flex flex-col">
        <div
          className="absolute right-0 top-[-80px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[640px] md:h-[830px] rounded-full rotate-12 
          shadow-[0_0_40px_rgb(255, 165, 0, 0.7)] flex items-center justify-center"
        >
          <img
            src={woman}
            alt="hero"
            data-aos="fade-up"
            className="object-cover object-center rounded-full w-80 h-80 border-4 border-white shadow-lg"
          />
        </div>

        <Navbar />
      </div>

      <section className="text-white body-font z-10">
        <div className="container mx-auto flex px-34  md:flex row flex-col items-left">
          <div
            data-aos="fade-up"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center relative -mt-80"
          >
            <h1
              style={{ fontFamily: "FreshMango" }}
              className="sm:text-4xl text-4xl mb-4 font-bold text-gray-300"
            >
              Hola! <span className="text-teal-500">Diana</span>
            </h1>
            <p className="mb-8 leading-relaxed  tracking-wide">
              {" "}
              heter jag och är en UX/UI-designer med frontendkunskaper, baserad
              i Stockholm.
              <br /> Jag har ett stort intresse för att skapa användarvänliga,
              estetiska och funktionella digitala lösningar. Jag är nyfiken,
              engagerad och alltid redo att ta mig an nya utmaningar som hjälper
              mig att växa och bidra till meningsfulla projekt.
              <br /> Mer information om mig hittar du i mitt CV här under!
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button
                  className="inline-flex text-white bg-teal-600 border-0 py-2 px-6
                focus:outline-none hover:bg-teal-800 hover:shadow-[0_0_40px_rgb(1, 128, 5)]
                rounded-full text-lg"
                >
                  Ladda ner CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
