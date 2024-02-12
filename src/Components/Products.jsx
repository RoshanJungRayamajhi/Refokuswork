import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import yahoo from "../assets/yahoo.webm";
import artiquel from "../assets/Arqitel project video 4_3.webm";
import haufe from "../assets/haufe.webm";
import rainfall from "../assets/rainfall.webm";

const Products = () => {
  var product = [
    {
      title: "Artiel",
      description:
        "ArtielProduct description - Product people who have created this product    will be added to the list of products created by this product   and will be added to the list of products created by this product and will be added to the",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "ArtielProduct description - Product people who have created this product    will be added to the list of products created by this product   and will be added to the list of products created by this product and will be added to the",
      live: true,
      case: false,
    },
    {
      title: "Artiel",
      description:
        "ArtielProduct description - Product people who have created this product    will be added to the list of products created by this product   and will be added to the list of products created by this product and will be added to the",
      live: true,
      case: false,
    },
    {
      title: "Yrr 2022",
      description:
        "ArtielProduct description - Product people who have created this product    will be added to the list of products created by this product   and will be added to the list of products created by this product and will be added to the",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "ArtielProduct description - Product people who have created this product    will be added to the list of products created by this product   and will be added to the list of products created by this product and will be added to the",
      live: true,
      case: true,
    },
  ];
  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 20);
  };

  return (
    <div className=" max-w-screen-lg mx-auto mt-28 relative">
      {product.map((items, index) => {
        return (
          <Product key={index} value={items} mover={mover} count={index} />
        );
      })}

      <div className=" w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-[40%]  h-[20rem] w-[23rem] z-[999] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full flex justify-center items-center"
          >
            <video autoPlay muted loop playsInline className="h-full">
              <source src={artiquel} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full flex justify-center items-center"
          >
            <video autoPlay muted loop playsInline className="h-full">
              <source src={rainfall} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full flex justify-center items-center"
          >
            <video autoPlay muted loop playsInline className="h-full">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full flex justify-center items-center"
          >
            <video autoPlay muted loop playsInline className="h-full">
              <source src={yahoo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full flex justify-center items-center"
          >
            <video autoPlay muted loop playsInline className="h-full">
              <source src={haufe} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
      <div className=" w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-[40%]  h-[20rem] w-[150%] rounded-md overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-[#0A0363] opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full z-[-99] bg-[#405068]"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-[#FF962D]"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-[#28BB6C]"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-[#07000B]"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

// transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}motion.
