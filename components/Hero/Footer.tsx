"use client"
import React from 'react';
import '../../styles/animations.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import clsx from 'clsx';
const Footer: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  return (
<div className="flex flex-col min-h-auto hidden sm:flex">
{/* Main content of your page */}
      <div className="flex-grow">
        {/* Your other page content */}
      </div>

      {/* Footer Section */}
      <div
        className={clsx(
          "footer text-orange1 font-dot py-2 px-4 text-center",
          isDarkMode ? " text-white" : " text-black"
        )}
      >
        <p
          className={clsx(
            "text-sm",
            isDarkMode ? "text-blue1" : "text-orange1"
          )}
        >
          This layout is free to use &copy; 2024  ~  Athul Jonnie
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/athuljonnie"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "mx-2",
              isDarkMode ? "text-electric hover:text-orange-300" : "text-elctric"
            )}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/athuljohney"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "mx-2",
              isDarkMode ? "text-electric hover:text-blue-300" : "text-elctric"
            )}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;