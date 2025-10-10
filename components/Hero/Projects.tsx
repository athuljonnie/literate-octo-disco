"use client";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
        <div className="space-y-8 mt-6">
          {/* Vocal Assist Project */}
          <div className={clsx(
            "relative p-6 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg bg-transparent",
            {
              "bg-0 border-orange1 hover:bg-gray-100": !isDarkMode,
              "bg-0 border-electric hover:bg-gray-700": isDarkMode,
            }
          )}>
            <h4
              className={clsx(
                "font-dot text-2xl mb-3 ease-in duration-300 hover:cursor-pointer transition-colors",
                {
                  "text-red hover:text-orange1": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToVocalAssist}
            >
              Vocal Assist
            </h4>
            <p className="font-mono text-lg mb-2">Full-stack platform enabling users to create and manage conversational AI agents.</p>
            <p className="font-mono text-sm italic mb-4 opacity-80">Integrated Google OAuth, Calendar, and Contacts APIs for automated scheduling and conflict detection. Designed database schema, implemented payment workflows, and handled end-to-end deployment.</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {['React', 'Node.js', 'Google APIs', 'Payment Integration', 'OAuth', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className={clsx(
                    "px-3 py-1 text-xs rounded-full font-dot transition-all duration-200 hover:scale-105",
                    {
                      "bg-orange1 text-white": !isDarkMode,
                      "bg-electric text-black": isDarkMode,
                    }
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Mobile App Collaboration Sub-project */}
            <div className={clsx(
              "ml-4 mt-4 border-l-2 pl-4 py-2 rounded-r-lg",
              {
                "border-gray-300 bg-gray-25": !isDarkMode,
                "border-gray-600 bg-gray-750": isDarkMode,
              }
            )}>
              <h5
                className={clsx(
                  "font-dot text-lg mb-2 ease-in duration-300",
                  {
                    "text-orange1": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                Mobile App Collaboration
              </h5>
              <p className="font-mono text-sm mb-2">Supervised intern in building and deploying mobile version of Vocal Assist. Implemented Google Auth and managed release pipeline.</p>
              <div className="flex flex-wrap gap-2">
                {['Mobile Development', 'Technical Mentorship'].map((tech) => (
                  <span
                    key={tech}
                    className={clsx(
                      "px-2 py-1 text-xs rounded-full font-dot",
                      {
                        "bg-gray-200 text-gray-700": !isDarkMode,
                        "bg-gray-600 text-gray-200": isDarkMode,
                      }
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* voCal Project */}
          <div className={clsx(
            "relative p-6 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg",
            {
              "bg-0 border-orange1 hover:bg-gray-100": !isDarkMode,
              "bg-0 border-electric hover:bg-gray-700": isDarkMode,
            }
          )}>
            <h4
              className={clsx(
                "font-dot text-2xl mb-3 ease-in duration-300 hover:cursor-pointer transition-colors",
                {
                  "text-red hover:text-orange1": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToVocal}
            >
              voCal
            </h4>
            <p className="font-mono text-lg mb-2">
              Full-stack appointment booking platform for businesses, initially targeting healthcare.
            </p>
            <p className="font-mono text-sm italic mb-4 opacity-80">Built custom calendar system for resource availability, leave tracking, and conflict management. Implemented agent onboarding, pre-configured conversational AI agents, and inbound numbers. Developed production-ready n8n workflows for scheduling and conflict resolution.</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {['React', 'Node.js', 'Custom Calendar', 'n8n Workflows', 'WebSocket', 'WhatsApp Integration'].map((tech) => (
                <span
                  key={tech}
                  className={clsx(
                    "px-3 py-1 text-xs rounded-full font-dot transition-all duration-200 hover:scale-105",
                    {
                      "bg-orange1 text-white": !isDarkMode,
                      "bg-electric text-black": isDarkMode,
                    }
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Mobile App Extension Sub-project */}
            <div className={clsx(
              "ml-4 mt-4 border-l-2 pl-4 py-2 rounded-r-lg",
              {
                "border-gray-300 bg-gray-25": !isDarkMode,
                "border-gray-600 bg-gray-750": isDarkMode,
              }
            )}>
              <h5
                className={clsx(
                  "font-dot text-lg mb-2 ease-in duration-300",
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
          </div>

          {/* n8n Helper Utilities Project */}
          <div className={clsx(
            "relative p-6 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg",
            {
              "bg-0 border-orange1 hover:bg-gray-100": !isDarkMode,
              "bg-0 border-electric hover:bg-gray-700": isDarkMode,
            }
          )}>
            <h4
              className={clsx(
                "font-dot text-2xl mb-3 ease-in duration-300 hover:cursor-pointer transition-colors",
                {
                  "text-red hover:text-orange1": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
            >
              n8n Helper Utilities
            </h4>
            <p className="font-mono text-lg mb-2">
              Built reusable workflow utilities to improve scalability and minimize redundant logic.
            </p>
            <p className="font-mono text-sm italic mb-4 opacity-80">Created modular n8n components for common operations like data validation, API error handling, and webhook processing. Reduced development time by 60% for new workflow implementations.</p>
            
            <div className="flex flex-wrap gap-2">
              {['n8n', 'Workflow Automation', 'Scalability', 'API Integration'].map((tech) => (
                <span
                  key={tech}
                  className={clsx(
                    "px-3 py-1 text-xs rounded-full font-dot transition-all duration-200 hover:scale-105",
                    {
                      "bg-orange1 text-white": !isDarkMode,
                      "bg-electric text-black": isDarkMode,
                    }
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Phonology Blog Platform Project */}
          <div className={clsx(
            "relative p-6 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg",
            {
              "bg-0 border-orange1 hover:bg-gray-100": !isDarkMode,
              "bg-0 border-electric hover:bg-gray-700": isDarkMode,
            }
          )}>
            <h4
              className={clsx(
                "font-dot text-2xl mb-3 ease-in duration-300 hover:cursor-pointer transition-colors",
                {
                  "text-red hover:text-orange1": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
              onClick={navigateToCyborg}
            >
              Cyborg Gaming
            </h4>
            <p className="font-mono text-lg mb-2">
              Full-stack ecom platform with admin dashboard, content management system adn production ready utilities.
            </p>
            <p className="font-mono text-sm italic mb-4 opacity-80">Built and deployed full stack ecom with admin dashboard using EJS, optimized for SEO and traffic. Integrated session management OTP verification and full utils to manage a ecom.</p>
            
            <div className="flex flex-wrap gap-2">
              {['Ejs', 'Nodejs', 'MongoDB', 'Payment Gateway'].map((tech) => (
                <span
                  key={tech}
                  className={clsx(
                    "px-3 py-1 text-xs rounded-full font-dot transition-all duration-200 hover:scale-105",
                    {
                      "bg-orange1 text-white": !isDarkMode,
                      "bg-electric text-black": isDarkMode,
                    }
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
