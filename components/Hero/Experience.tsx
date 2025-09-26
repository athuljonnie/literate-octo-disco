
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
              "font-dot text-2xl pb-2 pt-10 border-b-[1px] sm:text-base md:text-lg lg:text-xl ease-in duration-300",
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
                  "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                  {
                    "text-red": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                Vocallabs AI
              </h4>
              <p className="font-mono">Software Developer</p>
              <p className="font-mono"><i>January 2025 - Present</i></p>
              <ul className='list-disc list-inside font-mono'>
                <li>Designed and deployed a hospital booking platform used by 5,000+ patients monthly, integrating a custom calendar, real-time doctor availability, and automated SMS reminders—cutting scheduling time by 40%.</li>
                <li>Developed AI-powered voice assistants with SIP, Asterisk, and Plivo to answer missed calls and auto-schedule Google Calendar meetings, reducing missed calls &gt;30% and improving lead capture.</li>
                <li>Optimized Go microservices and caching strategies to reduce p95 API latency from 280 ms to 180 ms (35% faster), increasing system reliability and scalability.</li>
                <li>Implemented multi-channel communication (Voice, WhatsApp, Email) for customer engagement, improving response rates by ~40%.</li>
              </ul> 
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
              >
                Phonology IT Solutions
              </h4>
              <p className="font-mono">Full Stack Developer</p>
              <p className="font-mono"><i>January 2024 - January 2025</i></p>
              <ul className='list-disc list-inside font-mono'>
                <li>Refactored and optimized critical JavaScript algorithms, improving frontend load performance by 25% (Lighthouse score 72→90), enhancing user experience across thousands of daily sessions.</li>
                <li>Collaborated with cross-functional teams to implement secure REST APIs and real-time features, strengthening application reliability and maintainability.</li>
              </ul>
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
              >
                Brototype
              </h4>
              <p className="font-mono">Full Stack Developement Intern</p>
              <p className="font-mono"><i>Decemeber 2022 - November 2023</i></p>
              <ul className='list-disc list-inside font-mono'>
                <li>Acquired foundational programming skills through self-learning and practice.</li>
                <li>Developed and deployed a full-stack e-commerce application using Node.js, Handlebars, MongoDB, and Express.js.</li>
                <li>Recognized with &lsquo;Communication of the Month&lsquo; award for exceptional communication skills.</li>             
              </ul>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Experience
