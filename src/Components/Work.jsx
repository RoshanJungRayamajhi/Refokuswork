import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const { scrollYProgress } = useScroll();
  const [data, setdata] = useState([
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "68%",
      left: "48%",
      isActive: false,
    },

    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "55%",
      left: "57%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "65%",
      left: "51%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "58%",
      left: "57%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
  ]);

  scrollYProgress.on("change", (point) => {
    function imgshow(arry) {
      setdata((prev) =>
        prev.map((items, index) =>
          arry.indexOf(index) === -1
            ? { ...items, isActive: false }
            : { ...items, isActive: true }
        )
      );
    }
    switch (Math.floor(point * 100)) {
      case 0:
        imgshow([]);
        break;
      case 1:
        imgshow([0]);
        break;
      case 2:
        imgshow([0, 1]);
        break;
      case 3:
        imgshow([0, 1, 2]);
        break;
      case 4:
        imgshow([0, 1, 2, 3]);
        break;
      case 5:
        imgshow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imgshow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });
  return (
    <div className="w-full pt-16">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className=" font-medium text-[40vw] select-none leading-none tracking-tight text-center">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {data &&
            data.map(
              (items, index) =>
                items.isActive && (
                  <img
                    key={index}
                    style={{ top: items.top, left: items.left }}
                    className="rounded-md -translate-x-[50%] -translate-y-[50%] absolute w-64"
                    src={items.img}
                    alt=""
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default Work;
