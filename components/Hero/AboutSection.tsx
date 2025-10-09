"use client";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Projects from "./Projects";
import Arsenal from "@/components/Hero/Arsenal";
import Experience from "./Experience";
import "../../styles/animations.css";

const AboutSection: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  // Function to navigate to the given URL

  return (
    <div className="flex py-[0px] px-[0px] min-h-[80vh] flex-col lg:flex-row justify-between gap-0">
      {/* About Section Card */}
      <div
        id="scrollable-div"
        className="px-0 sm:px-6 min-w-[300px] sm:min-w-[400px] lg:min-w-[60vw] max-w-full sm:max-w-xl lg:max-w-3xl mx-auto border dark:border-gray-700 max-h-[80vh] lg:overflow-auto about-section"
        >
        <div
          className={clsx("px-6 max-w-full ease-in duration-300 ", {
            "text-black border-orange1": !isDarkMode,
            "text-white border-gray-600": isDarkMode,
          })}
        >
          <p
            className={clsx(
              "font-dot text-2xl pb-2 pt-10 border-b-[1px] md:text-lg lg:text-xl ease-in duration-300",
              {
                "text-orange1 border-white": !isDarkMode,
                "text-electric border-electric": isDarkMode,
              }
            )}
          >
            About.
          </p>
          <h4
            className={clsx(
              "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300",
              {
                "text-red": !isDarkMode,
                "text-blue1": isDarkMode,
              }
            )}
          >
            Product-driven Software Engineer | Full-Stack Developer | Conversational AI Specialist
          </h4>
          <p className="font-mono mt-2">🏡Kochi, KL</p>
          <p className="font-mono mt-0">
            Product-driven Software Engineer with nearly two years of experience building full-stack web applications and conversational AI platforms. 
            Strong expertise in MERN stack, PostgreSQL, and backend development with Python and Golang, with hands-on experience in workflow automation using n8n. 
            Skilled in designing scalable architectures, integrating APIs, and deploying production-ready applications.
          </p>
          <button
            className={clsx(
              "py-2 px-5 mx-5 mt-5 font-dot bg-transparent rounded-[60px]",
              "border-[1px] text-orange1", // Shared classes
              {
                "text-gray-500 border-electric": isDarkMode, // Adjust these for dark mode
                "text-orange1 border-orange1": !isDarkMode,
              }
            )}
          >
            Resume
          </button>

   <button
  className={clsx(
    "py-2 px-5 font-dot bg-transparent rounded-[60px] border-[1px]",
    {
      "text-gray-500 border-electric": isDarkMode,
      "text-orange1 border-orange1": !isDarkMode,
    }
  )}
  onClick={() => window.open("https://www.linkedin.com/in/athuljohney", "_blank")}
>
  Say Hi!
</button>

        </div>

        <Projects />
        <Experience />
      </div>
      <Arsenal />
    </div>
  );
};

export default AboutSection;
