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

  const navigateToVocal = () => {
    window.open ("https://www.usevocal.app", "_blank");
  };
  const navigateToCyborg = () => {
    window.open ("https://github.com/athuljonnie/cyborg-gaming", "_blank");
  };
  const navigateToCalendly = () => {
    window.open("https://github.com/athuljonnie/calendly-clone", "_blank");
  };
  const navigateToVocalAssist = () => {
    window.open("https://vocalassist.ai", "_blank"); // Replace with actual URL when available
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
        <ul className="list-decimal">
          <li className="py-5">
            <h4
              className={clsx(
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToVocalAssist}
            >
              Vocal Assist
            </h4>
            <p className="font-mono">Full-stack platform enabling users to create and manage conversational AI agents.</p>
            <p className="font-mono text-sm italic">Integrated Google OAuth, Calendar, and Contacts APIs for automated scheduling and conflict detection. Designed database schema, implemented payment workflows, and handled end-to-end deployment.</p>
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
              
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>PostgreSQL</span>
              </div>
            </div>
            
            {/* Mobile App Collaboration Sub-project */}
            <div className="ml-4 mt-3 border-l-2 border-gray-300 pl-4">
              <h5
                className={clsx(
                  "font-dot text-lg ease-in duration-300",
                  {
                    "text-orange1": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                Mobile App Collaboration
              </h5>
              <p className="font-mono text-sm">Supervised intern in building and deploying mobile version of Vocal Assist. Implemented Google Auth and managed release pipeline.</p>
              <div className="mt-2 flex flex-wrap gap-1 font-dot">
                <div
                  className={clsx(
                    "px-3 py-1 text-xs rounded-lg shadow-lg",
                    {
                      "bg-gray-200 text-black": !isDarkMode,
                      "bg-gray-600 text-white": isDarkMode,
                    }
                  )}
                >
                  Mobile Development
                </div>
                <div
                  className={clsx(
                    "px-3 py-1 text-xs rounded-lg shadow-lg",
                    {
                      "bg-gray-200 text-black": !isDarkMode,
                      "bg-gray-600 text-white": isDarkMode,
                    }
                  )}
                >
                  Technical Mentorship
                </div>
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
              onClick={navigateToVocal}
            >
              voCal
            </h4>
            <p className="font-mono">
              Full-stack appointment booking platform for businesses, initially targeting healthcare.
            </p>
            <p className="font-mono text-sm italic">Built custom calendar system for resource availability, leave tracking, and conflict management. Implemented agent onboarding, pre-configured conversational AI agents, and inbound numbers. Developed production-ready n8n workflows for scheduling and conflict resolution.</p>
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
              
              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>WhatsApp Integration</span>
              </div>
            </div>
            
            {/* Mobile App Collaboration Sub-project for voCal */}
            <div className="ml-4 mt-3 border-l-2 border-gray-300 pl-4">
              <h5
                className={clsx(
                  "font-dot text-lg ease-in duration-300",
                  {
                    "text-orange1": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                Mobile App Extension
              </h5>
              <p className="font-mono text-sm">Extended voCal platform to mobile with cross-platform compatibility and real-time synchronization.</p>
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
            <p className="font-mono text-sm italic">Created modular n8n components for common operations like data validation, API error handling, and webhook processing. Reduced development time by 60% for new workflow implementations.</p>
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

              <div
                className={clsx(
                  "px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2",
                  {
                    "bg-indigo text-black": !isDarkMode,
                    "bg-gray-500 text-white": isDarkMode,
                  }
                )}
              >
                <span>API Integration</span>
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
              onClick={navigateToCyborg}
            >
              Phonology Blog Platform
            </h4>
            <p className="font-mono">
              Full-stack blog platform with admin dashboard and content management system.
            </p>
            <p className="font-mono text-sm italic">Built and deployed landing page and admin dashboard using Next.js, optimized for SEO and traffic. Integrated Zoho CRM and automated workflows for lead management.</p>
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
                <span>Next.js</span>
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
                <span>SEO Optimization</span>
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
                <span>Zoho CRM</span>
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
                <span>Content Management</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
