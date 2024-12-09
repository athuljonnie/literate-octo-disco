
"use client";
import React from 'react'
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Experience:React.FC = () => {
    const isDarkMode = useSelector(
        (state: RootState) => state.darkMode.isDarkMode
      );
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
                "text-electric border-sky-600": isDarkMode,
              }
            )}
          >
                Experience
          </p>
          <ul className='list-decimal'>
            <li className="py-5">
              <h4
                className={clsx(
                  "font-dot text-sm pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                  {
                    "text-red": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
                // onClick={navigateToCalendly} // Attach the navigate function to the onClick event
              >
                Phonology IT Solutions
              </h4>
              <p className="font-mono">Full Stack Developer</p>
              <p className="font-mono"><i>January 2024 - Present</i></p>
              {/* <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>NextJS</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>ShadCN</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Neon DB</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Drizzler ORM</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Google Cloud Platform</span>
                </div>
              </div> */}
              <ul className='list-disc list-inside font-mono'>
                <li>Designed and developed a full-stack application, resulting in a 60% increase in sales.</li>
                <li>Enhanced customer interaction by integrating zoho forms and salesIQ.</li>
                <li>Migrated a Create React App to Next.js to improve SEO and performance.</li>
                <li>ested and developed APIs for PortaOne to ensure reliability and scalability.</li>
                <li>Improved code quality and application performance by implementing Redux for state management.</li>
                <li>Developed a backend system with authentication to create B2B communication blogs, optimized for complete SEO.</li>
                <li>Developed a backend system with authentication for creating customer support documentation, fully optimized for SEO.</li>
              </ul>
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
                // onClick={navigateToCalendly} // Attach the navigate function to the onClick event
              >
                Brototype
              </h4>
              <p className="font-mono">Full Stack Developement Intern</p>
              <p className="font-mono"><i>Decemeber 2022 - November 2023</i></p>
              {/* <div className="mt-2 mb-2 flex flex-wrap gap-1 font-dot">
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>NextJS</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>ShadCN</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Neon DB</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Drizzler ORM</span>
                </div>
                <div className="bg-indigo text-black px-4 py-2 max-h-[30px] rounded-lg shadow-lg flex items-center gap-2">
                  <span>Google Cloud Platform</span>
                </div>
              </div> */}
              <ul className='list-disc list-inside font-mono'>
                <li>Acquired foundational programming skills through self-learning and practice.</li>
                <li>Developed and deployed a full-stack e-commerce application using Node.js, Handlebars, MongoDB, and Express.js.</li>
                <li>Recognized with 'Communication of the Month' award for exceptional communication skills.</li>             
              </ul>
            </li>
          
          </ul>
        </div>
      
    </div>
  )
}

export default Experience
