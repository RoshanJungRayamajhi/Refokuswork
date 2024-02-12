import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imgurl, direction }) => {
  return (
    <div className="  w-full flex overflow-hidden whitespace-nowrap">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 36, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-8 pr-20 whitespace-nowrap"
      >
        {imgurl.map((items, index) => (
          <img key={index} src={items} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 36, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-8 pr-20 whitespace-nowrap"
      >
        {imgurl.map((items, index) => (
          <img key={index} src={items} className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
