import React from "react";
import { wordAnimation } from "../utils/animations";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10 flex-wrap">
      <h3 className="flex flex-col font-black text-4xl leading-[85%]">
        <span>Discover</span> <span>San Francisco</span>
      </h3>
     

      <motion.div variants={wordAnimation} className="flex gap-8">
        <div>Home</div>
        <div>Things to Do</div>
        <div>Neighborhoods</div>
        <div>Food & Drink</div>
        <div>Events</div>

      </motion.div>
    </nav>
  );
};



export default Navbar;


