import React from "react";
import Logo2 from "../../assets/Logo2.png";
const Navbar = () => {
  const listNavbar = [
    { name: "Hem", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Om mig", link: "#aboutme" },
    { name: "Projekt", link: "#projects" },
  ];

  return (
    <header data-aos="fade-up" className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row item-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={Logo2}
            alt="Navbar"
            data-aos="fade-left"
            className="object-fit cover object-center rounded-full w-20 h-20 "
          />
        </a>
        <nav className="md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 hover:text-teal-500"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          className="inline-flex items-center py-1 px-5 focus:outline-none text-base text-white mt-4
         md:mt-0 border border-white hover:border-teal-500 hover:text-teal-500"
        >
          <a href="#contact">Kontakta mig</a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
