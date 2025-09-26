"use client";
import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Experience: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const companies = [
    {
      name: "Vocallabs AI",
      role: "Software Developer",
      duration: "January 2025 - Present",
      description: "",
      tech: ["Go", "Node.js", "n8n", "PostgreSQL", "AI/ML", "SIP/Asterisk"],
      bullets: [
        "Designed hospital booking platform for 5,000+ patients/month, cutting scheduling time by 40%",
        "Developed AI-powered voice assistants reducing missed calls >30%",
        "Optimized Go microservices to reduce p95 API latency from 280ms to 180ms",
        "Rewrote high-traffic automation workflows in Python with ThreadPoolExecutor, reducing execution time from 25s to 8s (~68% faster)",
        "Implemented multi-channel communication (Voice, WhatsApp, Email) improving response rates ~40%",
      ],
      links: [
        { label: "Company Website", url: "https://vocallabs.ai" },
        { label: "LinkedIn", url: "https://linkedin.com/company/vocallabs" },
      ],
    },
    {
      name: "Phonology IT Solutions",
      role: "Full Stack Developer",
      duration: "January 2024 - January 2025",
      tech: ["JavaScript", "React", "Node.js", "REST APIs"],
      bullets: [
        "Refactored JS algorithms, improving frontend load by 25% (Lighthouse 72→90)",
        "Collaborated with cross-functional teams to implement secure REST APIs",
      ],
      links: [
        { label: "Company Website", url: "https://phonologyit.com" },
        { label: "LinkedIn", url: "https://linkedin.com/company/phonologyit" },
      ],
    },
    {
      name: "Brototype",
      role: "Full Stack Development Intern",
      duration: "December 2022 - November 2023",
      tech: ["Node.js", "Express", "MongoDB", "Handlebars"],
      bullets: [
        "Acquired foundational programming skills through self-learning",
        "Developed full-stack e-commerce application",
        "Recognized with 'Communication of the Month' award",
      ],
      links: [],
    },
  ];

  const buttonClass = clsx(
    "mt-2 px-4 py-1 rounded-md font-dot text-sm hover:opacity-80 transition ease-in-out duration-200",
    {
      "bg-orange1 text-black": !isDarkMode,
      "bg-blue1 text-white": isDarkMode,
    }
  );

  const badgeClass = clsx(
    "px-3 py-1 rounded-lg shadow-lg flex items-center gap-1 text-sm",
    {
      "bg-indigo text-black": !isDarkMode,
      "bg-gray-500 text-white": isDarkMode,
    }
  );

  return (
    <div className="px-6 max-w-full ease-in duration-300">
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

      <ul className="list-decimal">
        {companies.map((company, idx) => (
          <li key={idx} className="py-5">
            <h4
              className={clsx(
                "font-dot text-xl pt-2 sm:text-base md:text-lg lg:text-xl ease-in duration-300 decoration-dashed hover:cursor-pointer",
                {
                  "text-red": !isDarkMode,
                  "text-blue1": isDarkMode,
                }
              )}
            >
              {company.name}
            </h4>
            <p className="font-mono">{company.role}</p>
            <p className="font-mono italic">{company.duration}</p>

            {company.tech.length > 0 && (
              <div className="mt-2 mb-2 flex flex-wrap gap-2 font-dot">
                {company.tech.map((t, i) => (
                  <div key={i} className={badgeClass}>
                    {t}
                  </div>
                ))}
              </div>
            )}

            {company.bullets.length > 0 && (
              <ul className="list-disc list-inside font-mono text-sm">
                {company.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {company.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {company.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
