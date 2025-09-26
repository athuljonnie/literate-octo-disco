"use client";
import React from "react";
import "../../styles/hero.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import clsx from "clsx";
import AboutSection from "./AboutSection";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);




const Hero: React.FC = () => {
  // useGSAP(() => {
  //   gsap.to('.hero-container', {  
  //     scrollTrigger: '.hero-container', 
  //     x: 300
  //    }); 
  // })
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  return (
    <div className={clsx(
      "border-[1px] min-h-screen w-screen flex flex-col",
      {
        "border-white": !isDarkMode,
        "border-gray-500": isDarkMode,
      }
    )}>
      <div className="hero-container">
        {/* <Image src={Element} alt="hero-image" id='jonnie' width={1000} height={1000}/> */}
        <h2
          id="heading"
          className={clsx("ease-in duration-300", {
            " text-orange1": !isDarkMode,
            " text-electric": isDarkMode,
          })}
        >
          {" "}
          Athul Jonnie
        </h2>

        <h2
          id="sub-heading"
          className={clsx("ease-in duration-300 pb-1", {
            " text-orange1 border-b-[1px] border-white": !isDarkMode,
            " text-electric border-b-[1px] border-white": isDarkMode,
          })}
        >
          Software Engineer * AI/ML Enthusiast * Automations
        </h2>
      </div>    
      <div className="flex-1">
        <AboutSection/>
      </div>
      <Footer/>
    </div>
  );
};

export default Hero;
