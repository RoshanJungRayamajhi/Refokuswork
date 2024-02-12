import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover && "#7443ff" }}
      className={`${width} bg-zinc-800 p-3 rounded-xl min-h-[25rem] flex flex-col justify-between`}
    >
      <div className="w-full ">
        <div className="w-full flex justify-between items-center">
          <h1>Up next: Culture</h1>
          <MdOutlineArrowRightAlt />
        </div>
        <h1 className=" pt-8 text-3xl font-semibold"> Who we are!</h1>
      </div>
      <div className="down py-6 ">
        {start && (
          <>
            <h1 className="pb-5 text-6xl font-semibold leading-none tracking-tight">
              Start a project
            </h1>
            <button className=" rounded-full px-5 py-2 border-[1.4px] border-white ">
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className=" text-base font-medium text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
