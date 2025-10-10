
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
              "font-dot text-xl sm:text-2xl pb-2 pt-6 sm:pt-10 border-b-[1px] sm:text-base md:text-lg lg:text-xl ease-in duration-300",
              {
                "text-orange1 border-white": !isDarkMode,
                "text-electric border-sky-600": isDarkMode,
              }
            )}
          >
                Experience
          </p>
          <ul className='list-decimal pl-4 sm:pl-6'>
            <li className="py-3 sm:py-5">
              <h4
                className={clsx(
                  "font-dot text-lg sm:text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                  {
                    "text-red": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                VocalLabs.ai
              </h4>
              <p className="font-mono text-sm sm:text-base">Software Engineer</p>
              <p className="font-mono text-sm sm:text-base"><i>November 2023 - Present</i></p>
              <ul className='list-disc list-inside font-mono text-xs sm:text-sm space-y-1'>
                <li>Built and maintained full-stack applications using React, Node.js, Express, Hasura, Python, and Go.</li>
                <li>Designed and deployed n8n automation workflows to streamline backend logic and improve performance.</li>
                <li>Developed scalable GraphQL and REST APIs, integrating CRM, email, and payment systems.</li>
                <li>Managed hosting, CI/CD pipelines, and deployments via Docker and AWS EC2.</li>
                <li>Implemented error handling, webhook tracking, and observability for system reliability.</li>
                <li>Integrated agents with Chatwoot, enabling deployment as Telegram and WhatsApp bots.</li>
              </ul> 
            </li>
            <li className="py-3 sm:py-5">
              <h4
                className={clsx(
                  "font-dot text-lg sm:text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                  {
                    "text-red": !isDarkMode,
                    "text-blue1": isDarkMode,
                  }
                )}
              >
                Phonology IT Solutions
              </h4>
              <p className="font-mono text-sm sm:text-base">Backend & Full-Stack Developer</p>
              <p className="font-mono text-sm sm:text-base"><i>Previous Role</i></p>
              <ul className='list-disc list-inside font-mono text-xs sm:text-sm space-y-1'>
                <li>Built and deployed landing page and admin dashboard using Next.js, optimized for SEO and traffic.</li>
                <li>Developed blog backend with admin interface for content management.</li>
                <li>Integrated Zoho CRM and automated workflows for lead management.</li>
                <li>Managed EC2 hosting, CI/CD setup, and production deployment.</li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Experience