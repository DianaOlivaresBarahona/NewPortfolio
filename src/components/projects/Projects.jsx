import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/Emovere.png";

const Projects = () => {
  const listProjects = [
    {
      id: 1,
      image: image,
      title: "Emovere",
      description: "Känslo app för barn.",
    },
    {
      id: 2,
      image: image,
      title: "Todo app",
      description: "Mer info kommer strax.",
    },
    {
      id: 3,
      image: image,
      title: "Kaleido",
      description: "Mer info kommer strax.",
    },
    {
      id: 4,
      image: image,
      title: "Projekt 4",
      description: "Mer info kommer strax.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-gray-400 body-font"
    >
      <div className="container px-5 sm:px-12 md:px-24 lg:px-44 py-24 mx-auto">
        <h2
          style={{ fontFamily: "FreshMango" }}
          className="text-4xl font-bold text-center mb-12"
        >
          Mina Projekt
        </h2>
        <Slider {...settings}>
          {listProjects.map((project) => {
            return (
              <div key={project.id} className="p-4">
                <div className="h-full border-2 border-teal-400 shadow-[0_0_15px_rgba(13,148,136,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
