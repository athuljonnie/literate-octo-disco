"use client";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import clsx from "clsx";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { toggleDarkMode } from '../../redux/slices/darkModeSlice';

// const inter = Inter({ subsets: ["latin"] });

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch<AppDispatch>();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#000000' : '#E7E7DF';
  }, [isDarkMode]);

  return (
    <div
    className={clsx("absolute w-screen border-t-0 mt-1 p-2 font-dot", {
      "bg-transparent text-white border-white": isDarkMode,
      "bg-transparent text-orange1 border-white": !isDarkMode,
    })}
  >    
      <div className="container mx-auto flex items-center justify-between "> 
        <button
          onClick={toggleTheme}
          className={clsx("ease-in duration-300 px-1 py-0 text-[12px] md:hidden", {
            "text-white-300 text-white": isDarkMode,
            "bg-transparent text-orange1 border-white": !isDarkMode,
          })}
        >
          <RadioButtonCheckedOutlinedIcon />
        </button>
        <div
          className={clsx("hidden md:flex justify-center space-x-10", {
            "text-white": isDarkMode,
            "text-gray-400": !isDarkMode,
          })}
        >     
        </div>
        <div className=" hidden md:flex flex-grow justify-start space-x-4">
       
          <button
            onClick={toggleTheme}
            className={clsx("ease-in duration-300 px-1 py-0 text-[12px]", {
              "text-white-300 text-white": isDarkMode,
              "bg-transparent text-orange1 border-white": !isDarkMode,
            })}
          >
            <RadioButtonCheckedOutlinedIcon />
          </button>
          
        </div>

      
      </div>
    </div>
  );
};

export default NavBar;
