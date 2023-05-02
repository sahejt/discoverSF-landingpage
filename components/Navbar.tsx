import React from "react";
import { wordAnimation } from "../utils/animations";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10 flex-wrap">
      <h3 className="flex flex-col font-black text-4xl leading-[85%]">
        <span>Discover</span> <span>San Francisco</span>
      </h3>
      <div className="flex gap-6">
        <div className="menu-item">Home</div>
        <div className="menu-item">Things to Do</div>
        <div className="menu-item">Neighborhoods</div>
        <div className="menu-item">Food & Drink</div>
        <div className="menu-item">Events</div>
        <div className="menu-item">Insider Tips</div>
      </div>

      <style jsx>{`
        .menu-item {
          position: relative;
        }
        .menu-item::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background-color: #000;
          transform: scaleX(0);
          transform-origin: 0% 50%;
          transition: transform 0.7s;
        }
        .menu-item:hover::before {
          transform: scaleX(1);
        }
        .menu-item:hover::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background-color: #000;
          animation: underline 0.7s forwards;
        }
        @keyframes underline {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0);
          }
        }
      `}</style>
    </nav>
  );
};



export default Navbar;


