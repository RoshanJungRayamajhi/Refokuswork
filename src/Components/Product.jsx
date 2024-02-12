import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Product = ({ value, mover, count }) => {
  return (
    <motion.div
      onMouseEnter={() => mover(count)}
      className="w-full flex text-white h-[20rem]  "
    >
      <div className=" z-[999] max-w-screen-xl m-auto flex items-center justify-between">
        <h1 className=" text-5xl font-semibold">{value.title}</h1>
        <div className="dets w-1/3">
          <p className=" mb-6">{value.description}</p>
          <div className=" flex items-center gap-x-4">
            <Button title="live website" />
            {value.case && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
