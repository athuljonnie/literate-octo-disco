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
          Languages
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Go (Golang).</li>
          <li>Python.</li>
          <li>JavaScript.</li>
          <li>TypeScript.</li>
          <li>SQL.</li>
        </ul>
      </div>

      {/* Frontend Section */}
      <div className="mt-2">
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
          <li>FastAPI.</li>
          <li>n8n.</li>
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
          <li>PostgreSQL.</li>
          <li>MongoDB.</li>
          <li>MySQL.</li>
          <li>Redis.</li>
        </ul>
      </div>

      {/* AI/ML Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          AI / ML
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Conversational AI.</li>
          <li>NLP (spaCy, transformers).</li>
          <li>Voice Bots.</li>
          <li>LLM integration.</li>
          <li>WebRTC.</li>
        </ul>
      </div>

      {/* Cloud & DevOps Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Cloud & DevOps
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>AWS (EC2, S3, SES).</li>
          <li>Docker.</li>
          <li>Nginx.</li>
          <li>GitHub Actions CI/CD.</li>
          <li>Linux.</li>
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

    </div>
  );
};

export default Arsenal;
