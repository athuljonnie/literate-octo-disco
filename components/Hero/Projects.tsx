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
            "font-dot text-2xl pb-2 pt-10 border-b-[1px] sm:text-base md:text-lg lg:text-xl ease-in duration-300",
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
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToCalendly}
            >
              Vocal Assist
            </h4>
            <p className="font-mono">Full-stack platform enabling users to create and manage conversational AI agents.</p>
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
                <span>Google APIs</span>
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
                <span>Payment Integration</span>
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
                <span>OAuth</span>
              </div>
            </div>
          </li>

          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToBlog}
            >
              voCal
            </h4>
            <p className="font-mono">
              Full-stack appointment booking platform for businesses, initially targeting healthcare.
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
                <span>Custom Calendar</span>
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
                <span>n8n Workflows</span>
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
                <span>WebSocket</span>
              </div>
            </div>
          </li>

          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToSupportDocumentation}
            >
              Mobile App Collaboration
            </h4>
            <p className="font-mono">
              Supervised intern in building and deploying mobile version of Vocal Assist.
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
                <span>Mobile Development</span>
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
                <span>Google Auth</span>
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
                <span>Release Pipeline</span>
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
                <span>Technical Mentorship</span>
              </div>
            </div>
          </li>
          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToExcel2db}
            >
              n8n Helper Utilities
            </h4>
            <p className="font-mono">
              Built reusable workflow utilities to improve scalability and minimize redundant logic.
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
                <span>n8n</span>
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
                <span>Workflow Automation</span>
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
                <span>Scalability</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
