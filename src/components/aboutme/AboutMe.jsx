import React from "react";
import me2 from "../../assets/me2.jpg";

const AboutMe = () => {
  const languages = [
    { code: "En", name: "English", level: "Good" },
    { code: "Sp", name: "Spanish", level: "Maternal" },
    { code: "Sv", name: "Swedish", level: "Maternal" },
  ];

  return (
    <section
      id="aboutme"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      {/* Blurred Background Orbs */}
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-76 w-76 bg-gradient-to-br from-[#13e7e7] blur-2xl opacity-20 rounded-full"></div>
        <div className="h-76 w-76 bg-gradient-to-br from-[#13e7e7] blur-2xl opacity-40 rounded-full"></div>
        <div className="h-76 w-76 bg-gradient-to-br from-[#13e7e7] blur-2xl opacity-20 rounded-full"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image with Teal Background */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="relative md:w-[300px] md:h-[450px] h-[400px] w-full">
            {/* Teal Gradient Background Box */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-200 to-teal-600 rounded-md rotate-3 shadow-[0_0_40px_rgba(0,128,128,0.7)] z-0"></div>

            {/* Tilted & Smaller Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src={me2}
                className="object-cover w-[90%] h-[90%] object-center rounded-md rotate-3 filter grayscale"
                alt="aboutme"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            style={{ fontFamily: "FreshMango" }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-500"
          >
            Diana Barahona Olivares
          </h1>
          <p className="mb-8 text-white leading-normal tracking-wide">
            Jag är en junior designer med ett starkt intresse för UX och
            frontend.
            <br />
            Trots att jag är tidigt i min karriär har jag byggt en solid grund
            och är nyfiken på att utvecklas genom nya utmaningar. Jag är
            kreativ, problemlösande och alltid villig att lära.
            <br />
            Med en positiv inställning bidrar jag både självständigt och i team.
            <br />
            På fritiden gillar jag att resa, träna, dansa och rida – aktiviteter
            som ger mig energi och inspiration.
            <br />
            Jag ser fram emot att knyta kontakter, utbyta idéer och växa både
            professionellt och personligt.
          </p>

          {/* Language Icons Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 mt-4 text-blue-950"
          >
            <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="achievment flex flex-col items-center"
                >
                  <div className="circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-4 shadow-lg">
                    <span className="z-10">{language.code}</span>
                    <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#11a9b4] to-[#01c2bc] shadow-[0_0_20px_rgba(0,128,128,0.7)] z-0"></div>
                  </div>
                  <span className="text-xl md:text-xl text-white">
                    {language.name}
                  </span>
                  <span className="text-[#01a8c2] text-lg md:text-xl font-bold">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
