"use client";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Arsenal: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  return (
    <div
      className={clsx(
        "flex-1 px-6 max-h-[80vh] overflow-y-auto tools-section",
        isDarkMode ? "dark:bg-gray-800" : "bg-transparent",
        "border-[1px] border-b-0 border-t-0 border-l-0",
        isDarkMode ? "border-gray-600" : "border-white"
      )}
    >
      {/* Frontend Section */}
      <div className="mt-4">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Frontend
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>SEO Optimization</li>
        </ul>
      </div>

      {/* Backend Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Backend
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Python</li>
          <li>Golang</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>n8n Workflow Automation</li>
          <li>Microservices</li>
        </ul>
      </div>

      {/* Database Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Databases
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>PostgreSQL</li>
          <li>Hasura</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Data Modeling</li>
        </ul>
      </div>

      {/* DevOps & Hosting Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          DevOps & Hosting
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-gray-200" : "text-black"
          )}
        >
          <li>AWS EC2</li>
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Nginx</li>
          <li>Web Hosting</li>
          <li>Deployment Automation</li>
        </ul>
      </div>

      {/* Automation & Integrations Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Automation & Integrations
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>n8n</li>
          <li>API Integrations (CRM, Email, Payment)</li>
          <li>Chatwoot Bots (Telegram & WhatsApp)</li>
          <li>Webhooks</li>
        </ul>
      </div>

      {/* Other Tools & Concepts Section */}
      <div className="mt-2">
        <h6
          className={clsx(
            "text-lg sm:text-xl font-dot ",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          Other Tools & Concepts
        </h6>
        <ul
          className={clsx(
            "list-disc list-inside font-mono text-xs sm:text-sm",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <li>Git</li>
          <li>Version Control</li>
          <li>Agile</li>
          <li>Full-Stack Product Development</li>
          <li>Real-Time WebSocket Systems</li>
          <li>Workflow Optimization</li>
          <li>Technical Mentorship</li>
        </ul>
      </div>

    </div>
  );
};

export default Arsenal;