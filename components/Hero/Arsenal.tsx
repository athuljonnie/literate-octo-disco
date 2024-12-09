"use client";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Example icons

const Arsenal: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  return (
    <div
      className={clsx(
        "flex-1 px-6 min-h-[80vh] tools-section",
        isDarkMode ? "dark:bg-gray-800" : "bg-transparent",
        "border-[1px] border-b-0 border-t-0 border-l-0",
        isDarkMode ? "border-gray-600" : "border-white"
      )}
    >
      {/* Frontend Section */}
      <div className="mt-4">
        <h6
          className={clsx(
            "text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Frontend
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>React.</li>
          <li>Next.js.</li>
          <li>Tailwind CSS.</li>
          <li>ShadCN.</li>
          <li>GSAP.</li>
        </ul>
      </div>

      {/* Backend Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Backend
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Node.js.</li>
          <li>Express.js.</li>
        </ul>
      </div>

      {/* Database Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Database
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-gray-200" : "text-black"
          )}
        >
          <li>MongoDB.</li>
          <li>MySQL.</li>
          <li>PostgreSQL.</li>
          <li>NEON DB.</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Certifications
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>AWS Cloud Practitioner Essentials.</li>
          <li>FreeCodeCamp Responsive Web Design.</li>
        </ul>
      </div>

      {/* Other Tools Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Other Tools
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Git.</li>
          <li>AWS Hosting Services.</li>
        </ul>
      </div>
    </div>
  );
};

export default Arsenal;
