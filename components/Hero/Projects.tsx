"use client";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Example icons

const Projects: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const navigateToBlog = () => {
    window.open ("https://www.phonology.io/phonology-blogs", "_blank");
  };
  const navigateToCyborg = () => {
    window.open ("https://github.com/athuljonnie/cyborg-gaming", "_blank");
  };
  const navigateToCalendly = () => {
    window.open("https://github.com/athuljonnie/calendly-clone", "_blank");
  };
  const navigateToSupportDocumentation = () => {
    window.open("https://github.com/athuljonnie/calendly-clone", "_blank");
  };
  const navigateToExcel2db = () => {
    window.open("https://github.com/athuljonnie/excel2db", "_blank");
  };
  
  return (
    <div>
      <div
        className={clsx("px-6 max-w-full ease-in duration-300", {
          "text-black border-orange1": !isDarkMode,
          "text-white border-gray-600": isDarkMode,
        })}
      >
        <p
          className={clsx(
            "font-dot text-sm pb-2 pt-10 border-b-[1px] sm:text-base md:text-lg lg:text-xl ease-in duration-300",
            {
              "text-orange1 border-white": !isDarkMode,
              "text-electric border-electric": isDarkMode,
            }
          )}
        >
          Projects.
        </p>
        <ul className="list-disc">
          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToCalendly} // Attach the navigate function to the onClick event
            >
              Calendly Clone
            </h4>
            <p className="font-mono">Serverless Architecture in Next JS</p>
            <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot ">
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode, // Default mode styles
                    "bg-gray-500 text-white": isDarkMode, // Dark mode styles
                  }
                )}
              >
                <span>NextJS</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>ShadCN</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Neon DB</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Drizzler ORM</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Google Cloud Platform</span>
              </div>
            </div>
          </li>

          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToBlog}
            >
              Blog App for Phonology IT Solutions with Complete Search Engine
              Optimization
            </h4>
            <p className="font-mono">
              Full-stack blog application with complete search engine
              optimization.
            </p>
            {/* Technologies Section with Card Layout */}

            <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode, // Default mode (light) styles
                    "bg-gray-500 text-white": isDarkMode, // Dark mode styles
                  }
                )}
              >
                <span>React</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Node.js</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>MongoDB</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>JWT</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Draft Editor</span>
              </div>
            </div>
          </li>

          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToSupportDocumentation}
            >
              Support Documentation Management System
            </h4>
            <p className="font-mono">
              Developed a secure web app for managing categorized support docs
              with admin authentication and role-based access.
            </p>
            {/* Technologies Section with Card Layout */}

            <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode, // Light mode styles
                    "bg-gray-500 text-white": isDarkMode, // Dark mode styles
                  }
                )}
              >
                <span>React</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Node.js</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>MongoDB</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>JWT</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Draft Editor</span>
              </div>
            </div>
          </li>
          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToExcel2db}
            >
              Excel2db
            </h4>
            <p className="font-mono">
              Converts Excel files to structured database entries using xlsx.
            </p>
            {/* Technologies Section with Card Layout */}

            <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode, // Light mode styles
                    "bg-gray-500 text-white": isDarkMode, // Dark mode styles
                  }
                )}
              >
                <span>Node.js</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>MongoDB</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>XLSX</span>
              </div>
            </div>
          </li>

          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToCyborg} // Attach the navigate function to the onClick event
            >
              E-commerce For Gaming Computers and peripherals
            </h4>
            <p className="font-mono">
              Full-stack ecommerce application with full functionality of an
              ecommerce.
            </p>
            <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode, // Light mode styles
                    "bg-gray-500 text-white": isDarkMode, // Dark mode styles
                  }
                )}
              >
                <span>HandleBars</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Node.js</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>MongoDB</span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>Twilio</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
